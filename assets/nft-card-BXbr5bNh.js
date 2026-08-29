const c="/Mintora/assets/sprite-DOsRapQK.svg";function l(a){return`<div class="creator">
                <div class="nft-info-wrapper">
                  <img src="${a.image_url}" alt="${a.name||"userName"}" class="img-nft creator-img"/>
                 <div class="nft-info-name-wrapper">
                    <p class="nft-info-collection creator-collection">Collection by</p>
                    <p class="nft-info-username creator-name">${a.name}</p>
                 </div>
                </div>
                <div class="nft-info-more">
                  <p class="creator-username">@${a.twitter_username||"No Twitter"}</p>
                  <a href="${a.opensea_url}" target="_blank" class="creator-link">OpenSea Collection</a>
                </div>
                </div>`}function d(a){return`  <div class="nft__card-image--wrapper">
              <img src="${a.image_url}" alt="${a.name}" class="nft__info-img"/>
            </div>
            <div class="nft__card-info--wrapper">
              <h3 class="nft__card-title">${a.name}</h3>
              <p class="nft__card-description">${a.description||"No description available."}</p>
            </div>`}function p(a,s){return` <div class="owner">
               <div class="nft-info-wrapper">
                  <img src="${a.profile_image_url}" alt="${a.username||"userName"}" class="img-nft owner-img"/>
                <div class="nft-info-name-wrapper">
                    <p class="nft-info-collection owner-collection">Owned by</p>
                    <p class="nft-info-username owner-username">${a.username||"Owner"}</p>
                </div>
               </div>
               <div class="nft-info-more">
                  <p class="owner-followers">${a.followers||0} followers</p>
                  <p class="owner-update">Updated ${s.slice(0,10)}</p>
               </div>
              </div>`}function o(a){return a.map(({identifier:s,name:n,image_url:e,floorPrice:r=null,contract:i,chain:t})=>`<li class="nft-card__item swiper-slide" data-identifier="${s}"
  data-contract="${i}"
  data-chain="${t}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${e}" alt="" />
            <div class="nft__timer">
              <span>00H</span>
              <span>00m</span>
              <span>00s</span>
            </div>
          </div>

          <h3 class="nft__name">${n}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="${c}#price-icon"></use>
                </svg>

                <span>${r!=null?r.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`).join("")}function f(a,s,n){return`${d(a)}
  <div class="nft__card-user">
  ${l(s)}
      ${p(n,a.updated_at)}
  </div>
            <button class="place-bid-btn">Place Bid</button>
  `}export{o as m,f as r,c as s};
//# sourceMappingURL=nft-card-BXbr5bNh.js.map
