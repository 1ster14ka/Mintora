import sprite from '../../img/sprite.svg';
import { markupCreator } from './creator-card';
import { markupNftInfo } from './nft-detail';
import { markupOwner } from './owner-card';
// import { formatTime, getTimeRemaining } from '../utils/timer.js';
// <span>${formatTime(hours, 'H')}</span>
//               <span>${formatTime(minutes, 'm')}</span>
//               <span>${formatTime(seconds, 's')}</span>

export function markupNftCard(arr) {
  return arr
    .map(
      ({ identifier, name, image_url, floorPrice = null, contract, chain }) => {
        // console.log(collection);
        // console.log(chain);

        return `<li class="nft-card__item swiper-slide" data-identifier="${identifier}"
  data-contract="${contract}"
  data-chain="${chain}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${image_url}" alt="" />
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
      }
    )
    .join('');
}

export function renderNftPage(nft, collection, owner) {
  return `${markupNftInfo(nft)}
  <div class="nft__card-user">
  ${markupCreator(collection)}
      ${markupOwner(owner, nft.updated_at)}
  </div>
            <button class="place-bid-btn">Place Bid</button>
  `;
}
