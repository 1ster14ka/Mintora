import { loaderHide, loaderShow } from './components/loader';
import { markupNftCard } from './components/nft-card';
import { getDiscoverNfts } from './utils/discover-api';

const listCards = document.querySelector('.nft-card');
// const loadMoreBtn = document.querySelector('.loadMore');
const trigger = document.querySelector('.load-more-trigger');
let nextCursor = null;
let isLoading = false;

async function initDiscover() {
  isLoading = true;
  try {
    loaderShow();

    const result = await getDiscoverNfts();
    nextCursor = result.next;

    listCards.insertAdjacentHTML('beforeend', markupNftCard(result.nfts));
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
    loaderHide();
  }
}

async function loadMore() {
  if (!nextCursor || isLoading) return;

  try {
    isLoading = true;
    loaderShow();

    const result = await getDiscoverNfts(nextCursor);

    nextCursor = result.next;
    listCards.insertAdjacentHTML('beforeend', markupNftCard(result.nfts));
  } catch (error) {
    console.log(error);
  } finally {
    loaderHide();
    isLoading = false;
  }
}
const observer = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) {
      loadMore();
    }
  },
  {
    rootMargin: '400px',
  }
);
observer.observe(trigger);
initDiscover();
