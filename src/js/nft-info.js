import {
  getCollectionInformation,
  getNftInformation,
} from './utils/nft-info-api';
import { getInfoOwner, getOwnerAccount } from './utils/owner-api';
import { markupNftCard, renderNftPage } from './components/nft-card';

const params = new URLSearchParams(window.location.search);

const chain = params.get('chain');
const contract = params.get('contract');
const identifier = params.get('identifier');

const nftBlock = document.querySelector('.main__nft-card');
const listCards = document.querySelector('.nft-card--owner');

async function initNftPage() {
  try {
    const nft = await getNftInformation(chain, contract, identifier);

    const owner = await getInfoOwner(nft.owners[0].address);

    const collection = await getCollectionInformation(nft.collection);
    const ownerAccount = await getOwnerAccount(chain, owner.address);
    const ownerNfts = ownerAccount.nfts.map(nft => ({ ...nft, chain }));
    console.log(ownerNfts);

    console.log(collection);
    console.log(owner);

    // console.log(test);

    console.log(nft);

    nftBlock.insertAdjacentHTML(
      'beforeend',
      renderNftPage(nft, collection, owner)
    );
    listCards.innerHTML = markupNftCard(ownerNfts);
  } catch (error) {
    console.log(error);
  }
}

initNftPage();
