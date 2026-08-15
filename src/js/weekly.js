// import { markupNftCards } from './components/nft-card.js';
// import { updateTimers } from './utils/timer.js';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { markupNftCardsWeekly } from './components/nft-card.js';
import { weeklyNft } from './utils/weekly-api.js';

const listCards = document.querySelector('.nft-card--weekly');

async function initWeeklyNft() {
  try {
    const nfts = await weeklyNft();
    listCards.innerHTML = markupNftCardsWeekly(nfts);
  } catch (error) {
    console.log('Weekly is error', error);
  }
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],

    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 40,
    centerInsufficientSlides: true,
    navigation: {
      prevEl: '.weekly-slider-prev',
      nextEl: '.weekly-slider-next',
    },
  });
}
initWeeklyNft();
