// import { markupNftCardsExplore } from './components/nft-card';
// import { getAllNfts } from './utils/hero-api';
// import { updateTimers } from './utils/timer';

import { markupNftCard } from './components/nft-card';
import {} from './utils/collections-api';
import { getExploreNfts } from './utils/nfts-api.js';

const listCards = document.querySelector('.nft-card--explore');

async function initExploreNfts() {
  try {
    const nfts = await getExploreNfts();

    listCards.innerHTML = markupNftCard(nfts);
  } catch (err) {
    console.log('explore cards:', err);
  }
}
initExploreNfts();

// const nfts = await getExploreNfts();
// console.log(nfts);

// console.log(await getExploreNfts());
