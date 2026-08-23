export function markupCreator(collection) {
  return `<div class="creator">
                <div class="nft-info-wrapper">
                  <img src="${collection.image_url}" alt="${collection.name || 'userName'}" class="img-nft creator-img"/>
                 <div class="nft-info-name-wrapper">
                    <p class="nft-info-collection creator-collection">Collection by</p>
                    <p class="nft-info-username creator-name">${collection.name}</p>
                 </div>
                </div>
                <div class="nft-info-more">
                  <p class="creator-username">@${collection.twitter_username || 'No Twitter'}</p>
                  <a href="${collection.opensea_url}" target="_blank" class="creator-link">OpenSea Collection</a>
                </div>
                </div>`;
}
