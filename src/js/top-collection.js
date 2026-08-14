import heroNft from '../img/hero/hero-nft.jpg';

export const topCollections = [
  {
    id: 1,
    name: 'Viktor',
    username: '@viktor',
    avatar: heroNft,
    volume: '8,456',
    change24h: 27.78,
    floorPrice: '3.5',
    owners: '2.2K',
    items: 500,
  },
  {
    id: 2,
    name: 'Cyber Apes',
    username: '@cyberapes',
    avatar: heroNft,
    volume: '7,842',
    change24h: 18.42,
    floorPrice: '2.8',
    owners: '1.8K',
    items: 420,
  },
  {
    id: 3,
    name: 'Meta Punks',
    username: '@metapunks',
    avatar: heroNft,
    volume: '6,921',
    change24h: 12.65,
    floorPrice: '2.4',
    owners: '3.1K',
    items: 650,
  },
  {
    id: 4,
    name: 'Space Girls',
    username: '@spacegirls',
    avatar: heroNft,
    volume: '5,674',
    change24h: -4.32,
    floorPrice: '1.9',
    owners: '1.4K',
    items: 380,
  },
  {
    id: 5,
    name: 'Crypto Cats',
    username: '@cryptocats',
    avatar: heroNft,
    volume: '4,958',
    change24h: 27.78,
    floorPrice: '3.5',
    owners: '2.2K',
    items: 500,
  },
  {
    id: 6,
    name: 'Digital Souls',
    username: '@digitalsouls',
    avatar: heroNft,
    volume: '4,215',
    change24h: 8.91,
    floorPrice: '1.7',
    owners: '1.1K',
    items: 290,
  },
];

const tableEl = document.querySelector('.table');
const tbodyEl = tableEl.querySelector('.table__body');
tbodyEl.insertAdjacentHTML('beforeend', markupTopCollection(topCollections));

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
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${volume}</span>
            </div>
            <span class="table__change ${positiveOrNegativeClass(change24h)}">${positiveOrNegative(change24h)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${positiveOrNegativeClass(change24h)}">${positiveOrNegative(change24h)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${floorPrice}</span>
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
