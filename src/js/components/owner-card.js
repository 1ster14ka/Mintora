export function markupOwner(owner, updatedAt) {
  return ` <div class="owner">
                <p>Owned by</p>
                <img src="${owner.profile_image_url}" alt="${owner.username}" />
                <p>${owner.username || 'Owner'}</p>
                <p>${owner.followers || 0} followers</p>
                <p>Updated ${updatedAt.slice(0, 10)}</p>
              </div>`;
}
