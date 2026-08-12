const heroImgWrapper = document.querySelector('.hero__img-wrapper');
const btnPrev = document.querySelector('.hero__arrow-btn--prev');
const btnNext = document.querySelector('.hero__arrow-btn--next');

const heroImages = [
  {
    id: 1,
    title: 'Abstract Dreams',
    creator: 'Alex Morgan',
    image: '../img/hero/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Digital Nature',
    creator: 'Emma Wilson',
    image: '../img/hero/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Neon Future',
    creator: 'Daniel Smith',
    image: '../img/hero/hero-3.jpg',
  },
  {
    id: 4,
    title: 'Silent Space',
    creator: 'Olivia Brown',
    image: '../img/hero/hero-4.jpg',
  },
  {
    id: 5,
    title: 'Cyber City',
    creator: 'James Miller',
    image: '../img/hero/hero-5.jpg',
  },
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
          <use href="../img/sprite.svg#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${nextImg.image}"
            alt=""
          />
          `;
}
heroImgWrapper.innerHTML = markupImgs(heroImages);
