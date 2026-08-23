(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const c=document.querySelector(".nav__menu-button"),o=document.querySelector(".page"),l=document.querySelector(".mobile-menu");c.addEventListener("click",p);o.addEventListener("click",f);function f(e){e.target.classList.contains("page")&&d()}document.addEventListener("keydown",e=>{e.key==="Escape"&&d()});let u=0;l.addEventListener("touchstart",e=>{u=e.changedTouches[0].screenX});l.addEventListener("touchend",e=>{e.changedTouches[0].screenX-u>80&&d()});function p(){o.classList.add("is-menu-open"),c.classList.add("is-open"),document.body.classList.add("no-scroll")}function d(){o.classList.remove("is-menu-open"),c.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const b=[{address:"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",slug:"pudgypenguins"},{address:"0xEd5AF388653567Af2F388E6224dC7C4b3241C544",slug:"azuki"},{address:"0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",slug:"doodles-official"},{address:"0x1A92f7381B9F03921564a437210bB9396471050C",slug:"cool-cats-nft"},{address:"0x60E4d786628Fea6478F785A6d7e704777c86a7c6",slug:"mutant-ape-yacht-club"},{address:"0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",slug:"clonex"},{address:"0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6",slug:"cryptoadz-by-gremplin"}],h="870f094e1eb441a3a9f0a6dd9672296e",m="/Mintora/assets/sprite-D0bXH9w0.svg";function v(e){return`<div class="creator">
                <div class="nft-info-wrapper">
                  <img src="${e.image_url}" alt="${e.name||"userName"}" class="img-nft creator-img"/>
                 <div class="nft-info-name-wrapper">
                    <p class="nft-info-collection creator-collection">Collection by</p>
                    <p class="nft-info-username creator-name">${e.name}</p>
                 </div>
                </div>
                <div class="nft-info-more">
                  <p class="creator-username">@${e.twitter_username||"No Twitter"}</p>
                  <a href="${e.opensea_url}" target="_blank" class="creator-link">OpenSea Collection</a>
                </div>
                </div>`}function _(e){return`  <div class="nft__card-image--wrapper">
              <img src="${e.image_url}" alt="${e.name}" class="nft__info-img"/>
            </div>
            <div class="nft__card-info--wrapper">
              <h3 class="nft__card-title">${e.name}</h3>
              <p class="nft__card-description">${e.description||"No description available."}</p>
            </div>`}function g(e,n){return` <div class="owner">
               <div class="nft-info-wrapper">
                  <img src="${e.profile_image_url}" alt="${e.username||"userName"}" class="img-nft owner-img"/>
                <div class="nft-info-name-wrapper">
                    <p class="nft-info-collection owner-collection">Owned by</p>
                    <p class="nft-info-username owner-username">${e.username||"Owner"}</p>
                </div>
               </div>
               <div class="nft-info-more">
                  <p class="owner-followers">${e.followers||0} followers</p>
                  <p class="owner-update">Updated ${n.slice(0,10)}</p>
               </div>
              </div>`}function w(e){return e.map(({identifier:n,name:a,image_url:r,floorPrice:s=null,contract:t,chain:i})=>`<li class="nft-card__item swiper-slide" data-identifier="${n}"
  data-contract="${t}"
  data-chain="${i}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${r}" alt="" />
            <div class="nft__timer">
              <span>00H</span>
              <span>00m</span>
              <span>00s</span>
            </div>
          </div>

          <h3 class="nft__name">${a}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="${m}#price-icon"></use>
                </svg>

                <span>${s!=null?s.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`).join("")}function $(e,n,a){return`${_(e)}
  <div class="nft__card-user">
  ${v(n)}
      ${g(a,e.updated_at)}
  </div>
            <button class="place-bid-btn">Place Bid</button>
  `}function y(e){const n=e.target.closest(".nft-card__item"),{chain:a,contract:r,identifier:s}=n.dataset;n&&(window.location.href=`nft.html?chain=${encodeURIComponent(a)}&contract=${encodeURIComponent(r)}&identifier=${encodeURIComponent(s)}`)}export{h as a,b as c,w as m,y as o,$ as r,m as s};
//# sourceMappingURL=nft-DI9Qy5iK.js.map
