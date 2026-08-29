import { getTopCollections } from './utils/top-collection-api';
import { getInfoOwner, getOwnerAccount } from './utils/owner-api';
import { markupCreators } from './components/creators-markup';
import { openAccountInfo } from './nft';

const listCreators = document.querySelector('.nft__creator-list');

async function getCreators() {
  const collections = await getTopCollections(6);
  return Promise.all(
    collections.map(async collection => {
      const account = await getOwnerAccount(collection.chain, collection.owner);

      return {
        ...collection,
        nfts: account.nfts,
      };
    })
  );
}
listCreators.addEventListener('click', openAccountInfo);

async function initCreators() {
  try {
    const creators = await getCreators();
    console.log(creators);

    listCreators.innerHTML = markupCreators(creators);
  } catch (error) {
    console.log(error);
  }
}
initCreators();
