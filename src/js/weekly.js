import heroNft from '../img/hero/hero-nft.jpg';

export const weeklyNfts = [
  {
    id: 1,
    name: 'Viktor',
    image: heroNft,
    auctionEnd: '2026-08-16T19:04:00',
    currentBid: '1.25',
  },
  {
    id: 2,
    name: 'Cyber Ape',
    image: heroNft,
    auctionEnd: '2026-08-16T12:45:00',
    currentBid: '2.40',
  },
  {
    id: 3,
    name: 'Meta Punk',
    image: heroNft,
    auctionEnd: '2026-08-14T21:20:00',
    currentBid: '0.85',
  },
  {
    id: 4,
    name: 'Space Girl',
    image: heroNft,
    auctionEnd: '2026-08-17T18:10:00',
    currentBid: '3.10',
  },
  {
    id: 5,
    name: 'Crypto Cat',
    image: heroNft,
    auctionEnd: '2026-08-15T09:30:00',
    currentBid: '1.75',
  },
  {
    id: 6,
    name: 'Digital Soul',
    image: heroNft,
    auctionEnd: '2026-08-18T14:00:00',
    currentBid: '4.20',
  },
  {
    id: 7,
    name: 'Neon Monkey',
    image: heroNft,
    auctionEnd: '2026-08-16T20:15:00',
    currentBid: '2.90',
  },
  {
    id: 8,
    name: 'Future Face',
    image: heroNft,
    auctionEnd: '2026-08-19T11:45:00',
    currentBid: '1.05',
  },
];
const listCards = document.querySelector('.nft-card--weekly');

listCards.innerHTML = markupNftCards(weeklyNfts);
const items = [...listCards.children];

function updateTimers() {
  const idInterval = setInterval(() => {
    items.forEach(el => {
      const obj = weeklyNfts.find(({ id }) => id === Number(el.dataset.id));

      const { hours, minutes, seconds } = getTimeRemaining(obj.auctionEnd);
      const timer = el.querySelector('.nft__timer');
      const spans = timer.querySelectorAll('span');

      spans[0].textContent = formatTime(hours, 'H');
      spans[1].textContent = formatTime(minutes, 'm');
      spans[2].textContent = formatTime(seconds, 's');
    });
  }, 1000);
}

updateTimers();

function getTimeRemaining(time) {
  const now = new Date();
  const end = new Date(time);
  const difference = end - now;
  if (difference <= 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  const totalSeconds = Math.floor(difference / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    hours,
    minutes,
    seconds,
  };
}

function formatTime(value, suffix) {
  return `${String(value).padStart(2, '0')}${suffix}`;
}
function markupNftCards(arr) {
  return arr
    .map(({ id, name, image, auctionEnd, currentBid }) => {
      const { hours, minutes, seconds } = getTimeRemaining(auctionEnd);

      return `<li class="nft-card__item swiper-slide" data-id="${id}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${image}" alt="" />
            <div class="nft__timer">
              <span>${formatTime(hours, 'H')}</span>
              <span>${formatTime(minutes, 'm')}</span>
              <span>${formatTime(seconds, 's')}</span>
            </div>
          </div>

          <h3 class="nft__name">${name}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="./img/sprite.svg#price-icon"></use>
                </svg>

                <span>${currentBid}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`;
    })
    .join('');
}
