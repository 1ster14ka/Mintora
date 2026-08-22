(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const i=document.querySelector(".nav__menu-button"),d=document.querySelector(".page"),l=document.querySelector(".mobile-menu");i.addEventListener("click",f);d.addEventListener("click",p);function p(e){e.target.classList.contains("page")&&o()}document.addEventListener("keydown",e=>{e.key==="Escape"&&o()});let u=0;l.addEventListener("touchstart",e=>{u=e.changedTouches[0].screenX});l.addEventListener("touchend",e=>{e.changedTouches[0].screenX-u>80&&o()});function f(){d.classList.add("is-menu-open"),i.classList.add("is-open"),document.body.classList.add("no-scroll")}function o(){d.classList.remove("is-menu-open"),i.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const v=[{address:"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",slug:"pudgypenguins"},{address:"0xEd5AF388653567Af2F388E6224dC7C4b3241C544",slug:"azuki"},{address:"0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",slug:"doodles-official"},{address:"0x1A92f7381B9F03921564a437210bB9396471050C",slug:"cool-cats-nft"},{address:"0x60E4d786628Fea6478F785A6d7e704777c86a7c6",slug:"mutant-ape-yacht-club"},{address:"0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",slug:"clonex"},{address:"0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6",slug:"cryptoadz-by-gremplin"}],h="870f094e1eb441a3a9f0a6dd9672296e",m="/Mintora/assets/sprite-D0bXH9w0.svg";function _(e){return`<div class="creator">
                <p>Collection by</p>
                <img src="${e.image_url}" alt="${e.name}" />
                <p>${e.name}</p>
                <p>@${e.twitter_username||"No Twitter"}</p>
                <a href="${e.opensea_url}" target="_blank">OpenSea Collection</a>
                </div>`}function g(e){return`  <div class="nft__card-image--wrapper">
              <img src="${e.image_url}" alt="${e.name}" />
            </div>
            <div class="nft__card-info--wrapper">
              <h3 class="nft__card-title">${e.name}</h3>
              <p class="nft__card-description">${e.description||"No description available."}</p>
            </div>`}function b(e,a){return` <div class="owner">
                <p>Owned by</p>
                <img src="${e.profile_image_url}" alt="${e.username}" />
                <p>${e.username||"Owner"}</p>
                <p>${e.followers||0} followers</p>
                <p>Updated ${a.slice(0,10)}</p>
              </div>`}function y(e){return e.map(({identifier:a,name:n,image_url:c,floorPrice:s=null,contract:t,chain:r})=>`<li class="nft-card__item swiper-slide" data-identifier="${a}"
  data-contract="${t}"
  data-chain="${r}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${c}" alt="" />
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
                  <use href="${m}#price-icon"></use>
                </svg>

                <span>${s!=null?s.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`).join("")}function $(e,a,n){return`${g(e)}
  <div class="nft__card-user">
  ${_(a)}
      ${b(n,e.updated_at)}
  </div>
            <button class="place-bid-btn">Place Bid</button>
  `}export{h as a,v as c,y as m,$ as r,m as s};
//# sourceMappingURL=nft-card-BeUULAcM.js.map
