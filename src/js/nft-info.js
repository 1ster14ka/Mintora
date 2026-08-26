import {
  getCollectionInformation,
  getNftInformation,
} from './utils/nft-info-api';
import { getInfoOwner, getOwnerAccount } from './utils/owner-api';
import { markupNftCard, renderNftPage } from './components/nft-card';
import { openNftInformation } from './nft';
import { loaderHide, loaderShow } from './components/loader';
import { historySales } from './utils/history-sales-api';
import { renderPlaceBid } from './components/place-bid';

const params = new URLSearchParams(window.location.search);

const chain = params.get('chain');
const contract = params.get('contract');
const identifier = params.get('identifier');

const nftBlock = document.querySelector('.main__nft-card');
const listCards = document.querySelector('.nft-card--owner');
const nftContent = document.querySelector('.nft-content');
const modal = document.querySelector('.modal');
const modalList = document.querySelector('.modal-list');

listCards.addEventListener('click', openNftInformation);
nftBlock.addEventListener('click', openPlaceBid);
modal.addEventListener('click', modalFunction);
document.addEventListener('keydown', closeModalEscape);

async function openPlaceBid(event) {
  const button = event.target.closest('.place-bid-btn');
  if (!button) return;
  button.blur();
  openModal(modal);

  modalList.innerHTML = '<span class="loader"></span>';
  try {
    const history = await historySales(chain, contract, identifier);

    const purchases = await Promise.all(
      history.map(async sale => {
        const result = await getInfoOwner(sale.buyer);

        return {
          time: sale.event_timestamp,
          payment: sale.payment,
          data: result,
        };
      })
    );
    modalList.innerHTML = renderPlaceBid(purchases);
  } catch (error) {
    console.log(error);
    modalList.innerHTML = `
    <p class="modal-error">
      Failed to load purchase history.
    </p>
  `;
  }
}

function modalFunction(event) {
  if (event.target === event.currentTarget) {
    closeModal(modal);
    return;
  }
  const currencyButton = event.target.closest('.currency-select');

  if (currencyButton) {
    const wrapper = currencyButton.closest('.currency-wrapper');

    wrapper.classList.toggle('is-open');

    return;
  }

  const currencyOption = event.target.closest('[data-currency]');

  if (currencyOption) {
    const wrapper = currencyOption.closest('.currency-wrapper');
    const currencyButton = wrapper.querySelector('.currency-select span');

    currencyButton.textContent = currencyOption.dataset.currency;

    wrapper.classList.remove('is-open');

    return;
  }
  const wrapper = event.target.closest('.currency-wrapper');

  if (!wrapper) {
    modal.querySelector('.currency-wrapper')?.classList.remove('is-open');
  }
}

function closeModalEscape(event) {
  if (event.key === 'Escape') {
    closeModal(modal);
  }
}

function openModal(element) {
  element.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeModal(element) {
  element.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

async function initNftPage() {
  try {
    loaderShow();
    const nft = await getNftInformation(chain, contract, identifier);

    const owner = await getInfoOwner(nft.owners[0].address);

    const collection = await getCollectionInformation(nft.collection);
    const ownerAccount = await getOwnerAccount(chain, owner.address);
    const ownerNfts = ownerAccount.nfts.map(nft => ({ ...nft, chain }));

    nftBlock.insertAdjacentHTML(
      'beforeend',
      renderNftPage(nft, collection, owner)
    );
    listCards.innerHTML = markupNftCard(ownerNfts);
    nftContent.classList.add('is-loaded');
  } catch (error) {
    console.log(error);
  } finally {
    loaderHide();
  }
}

initNftPage();
