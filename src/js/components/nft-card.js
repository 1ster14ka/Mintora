import sprite from '../../img/sprite.svg';
// import { formatTime, getTimeRemaining } from '../utils/timer.js';
// <span>${formatTime(hours, 'H')}</span>
//               <span>${formatTime(minutes, 'm')}</span>
//               <span>${formatTime(seconds, 's')}</span>

export function markupNftCardsExplore(arr) {
  return arr
    .map(({ id, collection, image, contract }) => {
      const name = collection?.name ?? 'Unknown collection';
      const cachedUrl = image?.cachedUrl;
      const floorPrice = contract?.openSeaMetadata?.floorPrice;
      return `<li class="nft-card__item swiper-slide" data-id="${id}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${cachedUrl}" alt="" />
            <div class="nft__timer">
              <span>00H</span>
              <span>00m</span>
              <span>00s</span>
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

                <span>${floorPrice != null ? floorPrice.toFixed(2) : 0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`;
    })
    .join('');
}

export function markupNftCardsWeekly(arr) {
  return arr
    .map(({ id, name, image, creator, floorPrice }) => {
      return `<li class="nft-card__item swiper-slide" data-id="${id}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${image}" alt="" />
            <div class="nft__timer">
              <span>00H</span>
              <span>00m</span>
              <span>00s</span>
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

                <span>${floorPrice ? floorPrice.toFixed(2) : 0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`;
    })
    .join('');
}
