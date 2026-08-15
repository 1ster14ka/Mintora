import { markupNftCardsExplore } from './components/nft-card';
import { getAllNfts } from './utils/hero-api';
// import { updateTimers } from './utils/timer';

const listCards = document.querySelector('.nft-card--explore');
async function initExploreNfts() {
  try {
    const nfts = await getAllNfts();
    listCards.innerHTML = markupNftCardsExplore(nfts.slice(0, 8));
  } catch (err) {
    console.log('explore cards:', err);
  }
}
initExploreNfts();
const items = [...listCards.children];
