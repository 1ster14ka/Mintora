import { markupNftCards } from './components/nft-card';
import { nfts } from './utils/data';
import { updateTimers } from './utils/timer';

const listCards = document.querySelector('.nft-card--explore');
const exploreNfts = nfts.slice(0, 8);

listCards.innerHTML = markupNftCards(exploreNfts);

const items = [...listCards.children];
updateTimers(items, nfts);
