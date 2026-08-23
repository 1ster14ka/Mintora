export function markupOwner(owner, updatedAt) {
  return ` <div class="owner">
               <div class="nft-info-wrapper">
                  <img src="${owner.profile_image_url}" alt="${owner.username || 'userName'}" class="img-nft owner-img"/>
                <div class="nft-info-name-wrapper">
                    <p class="nft-info-collection owner-collection">Owned by</p>
                    <p class="nft-info-username owner-username">${owner.username || 'Owner'}</p>
                </div>
               </div>
               <div class="nft-info-more">
                  <p class="owner-followers">${owner.followers || 0} followers</p>
                  <p class="owner-update">Updated ${updatedAt.slice(0, 10)}</p>
               </div>
              </div>`;
}
