import { getTopCollections } from './utils/top-collection-api';
import { getInfoOwner, getOwnerAccount } from './utils/owner-api';
import { markupCreators } from './components/creators-markup';
import { openAccountInfo } from './nft';
import { loaderHide, loaderShow } from './components/loader';

const listCreators = document.querySelector('.nft__creator-list');
const loaderEl = document.querySelector('.loader');
const trigger = document.querySelector('.load-more-trigger');

let isLoading;
let creatorsCursor;

async function getCreators(limit = 9, days = 'one_day', cursor) {
  const { collections, next } = await getTopCollections(limit, days, cursor);

  const creators = await Promise.all(
    collections.map(async collection => {
      const account = await getOwnerAccount(collection.chain, collection.owner);

      return {
        ...collection,
        nfts: account.nfts,
      };
    })
  );
  return {
    creators,
    next,
  };
}
listCreators.addEventListener('click', openAccountInfo);

async function initCreators() {
  loaderShow(loaderEl);
  isLoading = true;
  try {
    const result = await getCreators();
    // console.log(creators[0].next);
    creatorsCursor = result.next;

    listCreators.innerHTML = markupCreators(result.creators);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
    loaderHide(loaderEl);
    // console.log(isLoading);
    // console.log(creatorsCursor);
  }
}

async function loadMoreCreators() {
  if (!creatorsCursor || isLoading) {
    return;
  }

  try {
    isLoading = true;
    loaderShow(loaderEl);

    const result = await getCreators(9, 'one_day', creatorsCursor);

    // console.log(result[0].next);

    creatorsCursor = result.next;
    listCreators.insertAdjacentHTML(
      'beforeend',
      markupCreators(result.creators)
    );
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
    loaderHide(loaderEl);
  }
}

const observer = new IntersectionObserver(
  entries => {
    if (!entries[0].isIntersecting || isLoading) {
      return;
    }

    loadMoreCreators();
  },
  {
    rootMargin: '400px',
  }
);

observer.observe(trigger);

initCreators();
