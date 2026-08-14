import sprite from '../../img/sprite.svg';
import { formatTime, getTimeRemaining } from '../utils/timer.js';

export function markupNftCards(arr) {
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
                  <use href="${sprite}#price-icon"></use>
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
