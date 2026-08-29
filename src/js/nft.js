export function openNftInformation(event) {
  const item = event.target.closest('.nft-card__item');
  const { chain, contract, identifier } = item.dataset;
  if (!item) return;
  window.location.href = `nft.html?chain=${encodeURIComponent(chain)}&contract=${encodeURIComponent(contract)}&identifier=${encodeURIComponent(identifier)}`;
}

export function openAccountInfo(event) {
  const creator = event.target.closest('.nft__creator-item');
  if (!creator) return;
  const address = creator.dataset.address;
  window.location.href = `account.html?address=${encodeURIComponent(address)}`;
}
