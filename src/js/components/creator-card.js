export function markupCreator(collection) {
  return `<div class="creator">
                <p>Collection by</p>
                <img src="${collection.image_url}" alt="${collection.name}" />
                <p>${collection.name}</p>
                <p>@${collection.twitter_username || 'No Twitter'}</p>
                <a href="${collection.opensea_url}" target="_blank">OpenSea Collection</a>
                </div>`;
}
