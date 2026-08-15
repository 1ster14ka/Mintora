import sprite from '../img/sprite.svg';
import { getAllNfts } from './utils/hero-api';

const heroImgWrapper = document.querySelector('.hero__img-wrapper');
const btnPrev = document.querySelector('.hero__arrow-btn--prev');
const btnNext = document.querySelector('.hero__arrow-btn--next');

let indx = 0;
btnPrev.disabled = true;
btnNext.addEventListener('click', slideNextImg);
let nfts = [];

async function initHero() {
  try {
    nfts = await getAllNfts();
    heroImgWrapper.innerHTML = markupImgs(nfts);
    updateButtons();
  } catch (err) {
    console.error('Failed to load NFTs:', err);
  }
}

function updateHero() {
  heroImgWrapper.classList.add('is-changing');

  setTimeout(() => {
    heroImgWrapper.innerHTML = markupImgs(nfts);
    heroImgWrapper.classList.remove('is-changing');
    updateButtons();
  }, 300);
}
function slideNextImg() {
  if (indx < nfts.length - 2) {
    indx += 1;
    updateHero();
  }
}

btnPrev.addEventListener('click', slidePrevImg);

function slidePrevImg() {
  if (indx > 0) {
    indx -= 1;
    updateHero();
  }
}

function markupImgs(arr) {
  const currentImg = arr[indx];
  const nextImg = arr[indx + 1];
  if (!currentImg || !nextImg) return '';
  return `<img
            class="hero__img hero__img--left"
            src="${currentImg.image?.cachedUrl}"
            alt=${currentImg.name ?? ''}
          />
<svg class="hero__arrow">
          <use href="${sprite}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${nextImg.image?.cachedUrl}"
            alt=${currentImg.name ?? ''}
          />
          `;
}
initHero();

function updateButtons() {
  btnPrev.disabled = indx === 0;
  btnNext.disabled = indx >= nfts.length - 2;
}
