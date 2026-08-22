export function openNftInformation(event) {
  const item = event.target.closest('.nft-card__item');
  const { chain, contract, identifier } = item.dataset;
  if (!item) return;
  window.location.href = `nft.html?chain=${encodeURIComponent(chain)}&contract=${encodeURIComponent(contract)}&identifier=${encodeURIComponent(identifier)}`;
}
