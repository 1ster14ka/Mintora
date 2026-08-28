const c="/Mintora/assets/sprite-DOsRapQK.svg";function o(a){return`<div class="creator">
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
            </div>`}function l(a,n){return` <div class="owner">
               <div class="nft-info-wrapper">
                  <img src="${a.profile_image_url}" alt="${a.username||"userName"}" class="img-nft owner-img"/>
                <div class="nft-info-name-wrapper">
                    <p class="nft-info-collection owner-collection">Owned by</p>
                    <p class="nft-info-username owner-username">${a.username||"Owner"}</p>
                </div>
               </div>
               <div class="nft-info-more">
                  <p class="owner-followers">${a.followers||0} followers</p>
                  <p class="owner-update">Updated ${n.slice(0,10)}</p>
               </div>
              </div>`}function p(a){return a.map(({identifier:n,name:s,image_url:t,floorPrice:e=null,contract:r,chain:i})=>`<li class="nft-card__item swiper-slide" data-identifier="${n}"
  data-contract="${r}"
  data-chain="${i}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${t}" alt="" />
            <div class="nft__timer">
              <span>00H</span>
              <span>00m</span>
              <span>00s</span>
            </div>
          </div>

          <h3 class="nft__name">${s}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="${c}#price-icon"></use>
                </svg>

                <span>${e!=null?e.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`).join("")}function f(a,n,s){return`${d(a)}
  <div class="nft__card-user">
  ${o(n)}
      ${l(s,a.updated_at)}
  </div>
            <button class="place-bid-btn">Place Bid</button>
  `}function m(a){const n=a.target.closest(".nft-card__item"),{chain:s,contract:t,identifier:e}=n.dataset;n&&(window.location.href=`nft.html?chain=${encodeURIComponent(s)}&contract=${encodeURIComponent(t)}&identifier=${encodeURIComponent(e)}`)}export{p as m,m as o,f as r,c as s};
//# sourceMappingURL=nft-BD5lowNQ.js.map
