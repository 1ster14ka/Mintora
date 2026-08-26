import sprite from '../../img/sprite.svg';

export function renderPlaceBid(purchases) {
  let result = `<p class="modal-title">History of Bid</p>`;

  result += purchases.length
    ? purchases
        .map(
          ({ time, payment, data: { profile_image_url, username } }) => `<li>
  <div class="history-purchase">
    <img src="${profile_image_url}" alt="${username || 'user'}" class="history-purchase-img"/>
    <div class="history-purchase-info">
      <p class="history-purchase-username">${username || 'Unknown user'}</p>
      <p class="history-purchase-time">${formatDate(time)}</p>
    </div>
    <p class="history-purchase-price"><svg class="nft-card__icon">
                  <use href="${sprite}#price-icon"></use>
                </svg>${formatPrice(payment)}</p>
    </div>
  </li>`
        )
        .join('')
    : '<p class="history-empty">No purchase history</p>';

  result += `<p>Your Bid</p>
 <div class="bid-input">
  <div class="currency-wrapper">
    <button class="currency-select" type="button">
      <span>ETH</span>

      <svg >
        <use href="${sprite}#open-currency" ></use>
      </svg>
    </button>
    <div class="currency-dropdown">
    <button type="button" data-currency="ETH">ETH</button>
    <button type="button" data-currency="WETH">WETH</button>
    <button type="button" data-currency="USDC">USDC</button>
  </div>
  </div>

  <input
    type="number"
    name="value"
    placeholder="0.00"
    min="0"
    step="any"
  />
</div>
  <button class="submit-btn-modal">Submit</button>


`;
  return result;
}

export function formatPrice(payment) {
  if (!payment) return 'No price';

  const price = Number(payment.quantity) / 10 ** payment.decimals;

  return `${price.toFixed(2)} ${payment.symbol}`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
