import { loaderHide, loaderShow } from './components/loader';
import { markupNftCard } from './components/nft-card';
import { getDiscoverNfts } from './utils/discover-api';
import { getCollectionNfts } from './utils/filter-collection-api';
import { closeWrapper, renderCollectionFilter } from './filter-collection';
import { openNftInformation } from './nft';

const listCards = document.querySelector('.nft-card');
const trigger = document.querySelector('.load-more-trigger');
const collectionEl = document.querySelector('.collection__btn-wrapper');
const sortEl = document.querySelector('.explore__sort');
const wrapper = document.querySelector('.btn__collection-filter');

const params = new URLSearchParams(window.location.search);
const collection = params.get('collection');
const chain = params.get('chain');

let discoverCursor = null;
let collectionCursor = null;
let selectedCollection = null;
let selectedChain = null;
let isLoading = false;
let collections = [];

if (collection) {
  initFilterCollection(collection, chain);
}

sortEl.addEventListener('click', sortedNfts);
listCards.addEventListener('click', openNftInformation);

document.addEventListener('click', event => {
  if (
    !collectionEl.contains(event.target) &&
    wrapper.classList.contains('is-open')
  ) {
    closeWrapper(wrapper);
  }
});

function sortedNfts(event) {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.classList.contains('btn-collection')) {
    renderCollectionFilter(wrapper, collections);

    return;
  }
  if (button.dataset.more) {
    loadMoreCollection();
    return;
  }
  if (button.dataset.id) {
    wrapper.innerHTML = '';
    closeWrapper(wrapper);

    initFilterCollection(button.dataset.id, button.dataset.chain);
  }
}

async function initFilterCollection(slug, chain) {
  isLoading = true;
  loaderShow();
  try {
    const result = await getCollectionNfts(slug);
    selectedCollection = slug;
    selectedChain = chain;

    collectionCursor = result.next;
    const nfts = result.nfts.map(nft => ({
      ...nft,
      chain,
    }));
    listCards.innerHTML = markupNftCard(nfts);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
    loaderHide();
  }
}

async function initDiscover() {
  isLoading = true;
  try {
    loaderShow();

    const result = await getCollections();

    discoverCursor = result.next;
    collections = result.collections;

    listCards.insertAdjacentHTML('beforeend', markupNftCard(result.nfts));
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
    loaderHide();
  }
}

async function loadMoreCollection() {
  if (!discoverCursor || isLoading) return;

  try {
    const result = await getCollections(discoverCursor);

    discoverCursor = result.next;
    collections = [...collections, ...result.collections];

    renderCollectionFilter(wrapper, collections);
  } catch (error) {
    console.log(error);
  }
}

async function loadMoreDiscover() {
  if (!discoverCursor || isLoading) return;

  try {
    isLoading = true;
    loaderShow();

    const result = await getDiscoverNfts(discoverCursor);

    discoverCursor = result.next;
    listCards.insertAdjacentHTML('beforeend', markupNftCard(result.nfts));
  } catch (error) {
    console.log(error);
  } finally {
    loaderHide();
    isLoading = false;
  }
}

async function loadMoreCollectionNfts() {
  if (!collectionCursor || isLoading) return;
  isLoading = true;
  loaderShow();

  try {
    const result = await getCollectionNfts(
      selectedCollection,
      collectionCursor
    );
    const nfts = result.nfts.map(nft => ({
      ...nft,
      chain: selectedChain,
    }));

    collectionCursor = result.next;
    listCards.insertAdjacentHTML('beforeend', markupNftCard(nfts));
  } catch (error) {
    console.log(error);
  } finally {
    loaderHide();
    isLoading = false;
  }
}
const observer = new IntersectionObserver(
  entries => {
    if (!entries[0].isIntersecting || isLoading) return;

    if (selectedCollection) {
      loadMoreCollectionNfts();
    } else {
      loadMoreDiscover();
    }
  },
  {
    rootMargin: '400px',
  }
);

observer.observe(trigger);

if (collection) {
  initFilterCollection(collection, chain);
} else {
  initDiscover();
}
