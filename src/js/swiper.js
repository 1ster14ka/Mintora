import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

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
