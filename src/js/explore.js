// import { markupNftCardsExplore } from './components/nft-card';
// import { getAllNfts } from './utils/hero-api';
// import { updateTimers } from './utils/timer';

import { markupNftCard } from './components/nft-card';
import { closeWrapper, renderCollectionFilter } from './filter-collection.js';
import { openNftInformation } from './nft.js';
import { getCollections } from './utils/collections-api';
import { getDiscoverNfts } from './utils/discover-api.js';
import { getCollectionNfts } from './utils/filter-collection-api.js';
import { getExploreNfts } from './utils/nfts-api.js';

const listCards = document.querySelector('.nft-card--explore');
const sortEl = document.querySelector('.explore__sort');
const wrapper = document.querySelector('.btn__collection-filter');
let collectionCursor = null;
let collections = null;
sortEl.addEventListener('click', openCollection);
async function openCollection(event) {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.classList.contains('btn-collection')) {
    const result = await getCollections();

    collectionCursor = result.next;
    collections = result.collections;

    renderCollectionFilter(wrapper, collections);

    return;
  }
  if (button.dataset.id) {
    wrapper.innerHTML = '';
    closeWrapper(wrapper);
    const { chain, id } = button.dataset;
    window.location.href = `discover.html?chain=${chain}&collection=${id}`;
  }
  if (button.dataset.more) {
    loadMoreCollection();
    return;
  }
}

async function loadMoreCollection() {
  if (!collectionCursor) return;

  try {
    const result = await getCollections(collectionCursor);

    collectionCursor = result.next;
    collections = [...collections, ...result.collections];

    renderCollectionFilter(wrapper, collections);
  } catch (error) {
    console.log(error);
  }
}
listCards.addEventListener('click', openNftInformation);

async function initExploreNfts() {
  try {
    const nfts = await getExploreNfts(20);

    listCards.innerHTML = markupNftCard(nfts);
  } catch (err) {
    console.log('explore cards:', err);
  }
}

initExploreNfts();
