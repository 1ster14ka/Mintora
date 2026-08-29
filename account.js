import{a as l}from"./assets/data-rSeLe94G.js";/* empty css                      */import{s as o,m as t}from"./assets/nft-card-BXbr5bNh.js";import{a as i}from"./assets/vendor-SJA_hCIU.js";import{b as e}from"./assets/collections-api-BXOPBCsG.js";import{g as n}from"./assets/owner-api-DULqRX0-.js";import"./assets/discover-api-hEdItt07.js";function _(s,a,r){return`
  <div class="creator__info-wrapper">
  <div class="creator__info">
  <div class="creator__bg-wrapper">
    <img class="creator__bg" src="${s.banner_image_url}"/>
  </div>
    <img class="creator__img" src="${s.profile_image_url}"/>
    <div class="creator__follow-wrapper">
      <p class="creator__names">
      <span class="creator__name">${s.display_name}</span>
      <span class="creator__username">@${s.username}</span>
      </p>
      <button class="creator__btn creator__btn-follow">Follow +</button>
      <button class="creator__btn creator__btn-unfollow">Unfollow -</button>
    </div>
    <div class="creator__bio-wrapper">
    <div class="creator__bio-subscribes">
    <p class="creator__followers"><span class="creator__followers-count">${s.follower_count}</span><span class="creator__followers-text">Followers</span></p>
    <p class="creator__followers"><span class="creator__followers-count">${s.following_count}</span><span class="creator__followers-text">Followings</span></p>

    </div>
    <div class="creator__bio">
    <p class="creator__bio-subtitle">Bio</p>
    <p class="creatro__bio-text">${s.bio}</p>
    </div>

     <ul class="social__list creator__social-list">
        <li class="social__item">
          <a class="social__link" href="">
            <svg class="social__icons creator__social-icon">
              <use href="${o}#instagram-icon"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="">
            <svg class="social__icons creator__social-icon">
              <use href="${o}#linkedIn-icon"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="">
            <svg class="social__icons creator__social-icon">
              <use href="${o}#facebook-icon"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="">
            <svg class="social__icons creator__social-icon">
              <use href="${o}#twitter-icon"></use>
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
${t(a.collections)}
    </ul>

    <div class="creator__activity">
    <p>Activity</p>
    <ul class="creator__activity-list">
    </ul>

    </div>
  </div>

  </div>
  `}async function p(s){return(await i.get(`https://api.opensea.io/api/v2/events/accounts/${s}`,{headers:{"x-api-key":l},params:{limit:20,event_type:["sale","transfer","listing","offer"]}})).data}const u=new URLSearchParams(window.location.search),c=u.get("address"),m=document.querySelector(".container-account");console.log(c);async function v(){try{const[s,a,r]=await Promise.all([await n(c),await e(c),await p(c)]);console.log(s),console.log(a),console.log(r),m.innerHTML=_(s,a,r)}catch(s){console.log(s)}}v();
//# sourceMappingURL=account.js.map
