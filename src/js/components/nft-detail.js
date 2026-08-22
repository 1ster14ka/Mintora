export function markupNftInfo(nft) {
  return `  <div class="nft__card-image--wrapper">
              <img src="${nft.image_url}" alt="${nft.name}" />
            </div>
            <div class="nft__card-info--wrapper">
              <h3 class="nft__card-title">${nft.name}</h3>
              <p class="nft__card-description">${nft.description || 'No description available.'}</p>
            </div>`;
}
