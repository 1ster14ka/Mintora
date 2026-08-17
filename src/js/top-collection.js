import sprite from '../img/sprite.svg';
import { getTopCollections } from './utils/top-collection-api';

const tableEl = document.querySelector('.table');
const tbodyEl = tableEl.querySelector('.table__body');
// tbodyEl.insertAdjacentHTML('beforeend', markupTopCollection(topCollections));

async function initTipCollection() {
  try {
    const collections = await getTopCollections(10);
    tbodyEl.insertAdjacentHTML('beforeend', markupTopCollection(collections));
  } catch (error) {
    console.log('Collections error', error);
  }
}
initTipCollection();

function markupTopCollection(arr) {
  return arr
    .map(
      ({
        id,
        name,
        username,
        avatar,
        volume,
        change24h,
        floorPrice,
        owners,
        items,
      }) => ` <tr class="table__body-row" data-id="${id}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${avatar}" alt="" />
              <div class="table__info">
                <p class="table__name">${name}</p>
                <p class="table__username">${username}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${sprite}#price-icon"></use>
              </svg>
              <span class="table__price">${volume != null ? volume.toFixed(2) : '0'}</span>
            </div>
            <span class="table__change ${positiveOrNegativeClass(change24h)}">${positiveOrNegative(change24h)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${positiveOrNegativeClass(change24h)}">${positiveOrNegative(change24h)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${sprite}#price-icon"></use>
              </svg>
              <span class="table__price">${floorPrice != null ? floorPrice.toFixed(2) : '-'}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${owners}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${items}</span>
          </td>
        </tr>`
    )
    .join('');
}

function positiveOrNegativeClass(value) {
  if (value > 0) {
    return 'table__change--positive';
  }
  return 'table__change--negative';
}

function positiveOrNegative(value) {
  if (value > 0) {
    return `+ ${value}`;
  }
  return `- ${Math.abs(value)}`;
}
