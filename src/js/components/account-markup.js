import { markupNftCard } from './nft-card';
import sprite from '../../img/sprite.svg';

export function markupAccount(accountInfo, collections, activities) {
  return `
  <div class="creator__info-wrapper">
  <div class="creator__info">
  <div class="creator__bg-wrapper">
    <img class="creator__bg" src="${accountInfo.banner_image_url}"/>
  </div>
    <img class="creator__img" src="${accountInfo.profile_image_url}"/>
    <div class="creator__main-wrapper">
    <div class="creator__left">
      <div class="creator__follow-wrapper">
        <p class="creator__names">
        <span class="creator__name">${accountInfo.display_name || 'User'}</span>
        <span class="creator__username">@${accountInfo.username || 'userName'}</span>
        </p>
        <button class="creator__btn creator__btn-follow">Follow +</button>
        <button class="creator__btn creator__btn-unfollow">Unfollow -</button>
      </div>

        <div class="creator__bio-wrapper">
        <div class="creator__bio-subscribes">
        <p class="creator__followers"><span class="creator__followers-count">${accountInfo.follower_count}</span><span class="creator__followers-text">Followers</span></p>
        <p class="creator__followers"><span class="creator__followers-count">${accountInfo.following_count}</span><span class="creator__followers-text">Followings</span></p>

        </div>
        <div class="creator__bio">
        <p class="creator__bio-subtitle">Bio</p>
        <p class="creatro__bio-text">${accountInfo.bio || 'Not Bio'}</p>
        </div>

         <ul class="social__list creator__social-list">
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${sprite}#instagram-icon"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${sprite}#linkedIn-icon"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${sprite}#facebook-icon"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${sprite}#twitter-icon"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
    </div>
     <div class="creator__lists-wrapper">
        <div class="creator__collection-wrapper">
        <button class="creator__btn-action creator__btn-collection is-open">Collection</button>
        <button class="creator__btn-action creator__btn-activity">Activity</button>

        </div>
        <ul class="creator__collection-list nft-card nft-card--explore is-open">
    ${markupNftCard(collections.collections)}
        </ul>



        <ul class="creator__activity-list">
        ${markupActivities(activities.asset_events, accountInfo.display_name)}
        </ul>
     </div>
   </div>


  </div>

  </div>
  `;
}

export function markupActivities(activity, displayName) {
  return activity
    .filter(event => event.nft)
    .map(
      ({
        chain,
        event_timestamp,
        nft: {
          display_image_url,
          image_url,
          original_image_url,
          contract,
          collection,
          opensea_url,
          name,
        },
        to_address,
        transfer_type,
      }) =>
        `<li class="creator__activity-item">
            <div class="creator__activity-wrapper">
                <div class="creator__activity-info">
                <img class="creator__activity-img" src="${display_image_url || image_url || getImageUrl(original_image_url)}"/>
                <p class="creator__activity-names">
                <span class="creator__activity-name">${name}</span>
                <span class="creator__activity-username">@${displayName || 'Not userName'}</span> <a href="${opensea_url}" target="_blank">Open Sea</a></p>
                </div>

                <div class="creator__activity-transfer">
                <p class="creator__activity-type">${transfer_type}</p>
                  <p class="creator__activity-date">${formatDate(event_timestamp)}</p>
                </div>
            </div>
        </li>`
    )
    .join('');
}

function getImageUrl(url) {
  if (!url) return '';

  if (url.startsWith('ipfs://')) {
    return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
  }

  return url;
}

function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleString('en-EN');
}
