export function markupCreators(arr) {
  return arr
    .map(
      ({ avatar, username, nfts, floorPrice, owners, volume }) =>
        `<li class="nft__creator-item">
      <div class="nft__creator-bg"><img class="nft__creator-img-bg" src="${avatar}"/></div>
  <div class="nft__creator-wrapper">
  <img class="nft__creator-img" src="${avatar}"/></div>
  <p class="nft__creator-username">${username}</p>

  <ul class="nft__creator-stats">
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Price</p>
  <p class="nft__creator-info">${floorPrice}</p>
  </li>
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Owners</p>
  <p class="nft__creator-info">${owners}</p>
  </li>
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Volume</p>
  <p class="nft__creator-info">${volume.toFixed(2)}</p>
  </li>
  </ul>

  <ul class="nft__creator__list">
  <li class="nft__creator__item"><img class="nft__creator__img"src="${nfts[0]?.image_url}"/></li>
  <li class="nft__creator__item"><img class="nft__creator__img" src="${nfts[1]?.image_url}"/></li>
  <li class="nft__creator__item">
  <div class="nft__creator__img-wrapper">
  <img class="nft__creator__img" src="${nfts[2]?.image_url}"/>
  <p class="nft__creator-cards">${nfts.length ? `+${nfts.length}` : 0}</p>
  </div></li>
  </ul>
  </li>`
    )
    .join('');
}
