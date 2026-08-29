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
    <div class="creator__follow-wrapper">
      <p class="creator__names">
      <span class="creator__name">${accountInfo.display_name}</span>
      <span class="creator__username">@${accountInfo.username}</span>
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
    <p class="creatro__bio-text">${accountInfo.bio}</p>
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
    <div class="creator__collection-wrapper">
    <button class="creator__btn-collection">Collection</button>
    <button class="creator__btn-collection">Activity</button>

    </div>
    <ul class="creator__collection-list nft-card nft-card--explore">
${markupNftCard(collections.collections)}
    </ul>

    <div class="creator__activity">
    <p>Activity</p>
    <ul class="creator__activity-list">
    </ul>

    </div>
  </div>

  </div>
  `;
}
