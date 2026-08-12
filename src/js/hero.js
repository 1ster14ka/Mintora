import hero1 from '../img/hero/hero-1.jpg';
import hero2 from '../img/hero/hero-2.jpg';
import hero3 from '../img/hero/hero-3.jpg';
import hero4 from '../img/hero/hero-4.jpg';
import hero5 from '../img/hero/hero-5.jpg';
import sprite from '../img/sprite.svg';

const heroImgWrapper = document.querySelector('.hero__img-wrapper');
const btnPrev = document.querySelector('.hero__arrow-btn--prev');
const btnNext = document.querySelector('.hero__arrow-btn--next');

const heroImages = [
  { id: 1, image: hero1 },
  { id: 2, image: hero2 },
  { id: 3, image: hero3 },
  { id: 4, image: hero4 },
  { id: 5, image: hero5 },
];
let indx = 0;
btnPrev.disabled = true;
btnNext.addEventListener('click', slideNextImg);
function slideNextImg() {
  btnPrev.disabled = false;

  indx += 1;
  if (indx + 2 === heroImages.length) {
    btnNext.disabled = true;
  }

  heroImgWrapper.classList.add('is-changing');

  setTimeout(() => {
    heroImgWrapper.innerHTML = markupImgs(heroImages);
    heroImgWrapper.classList.remove('is-changing');
  }, 300);
}

btnPrev.addEventListener('click', slidePrevImg);

function slidePrevImg() {
  btnNext.disabled = false;
  indx -= 1;

  if (indx === 0) {
    btnPrev.disabled = true;
  }

  heroImgWrapper.classList.add('is-changing');

  setTimeout(() => {
    heroImgWrapper.innerHTML = markupImgs(heroImages);
    heroImgWrapper.classList.remove('is-changing');
  }, 300);
}

function markupImgs(arr) {
  const currentImg = arr[indx];
  const nextImg = arr[indx + 1];
  return `<img
            class="hero__img hero__img--left"
            src="${currentImg.image}"
            alt=""
          />
<svg class="hero__arrow">
          <use href="${sprite}"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${nextImg.image}"
            alt=""
          />
          `;
}
heroImgWrapper.innerHTML = markupImgs(heroImages);
