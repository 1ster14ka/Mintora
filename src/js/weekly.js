import { markupNftCards } from './components/nft-card.js';
import { weeklyNfts } from './utils/data.js';
import { updateTimers } from './utils/timer.js';

const listCards = document.querySelector('.nft-card--weekly');

listCards.innerHTML = markupNftCards(weeklyNfts);
const items = [...listCards.children];

updateTimers(items, weeklyNfts);
