(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const i="/Mintora/assets/sprite-D0bXH9w0.svg";function c(n){return n.map(({identifier:t,name:a,image_url:r,floorPrice:e=null})=>`<li class="nft-card__item swiper-slide" data-id="${t}">
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
                  <use href="${i}#price-icon"></use>
                </svg>

                <span>${e!=null?e.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`).join("")}const o=[{address:"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",slug:"pudgypenguins"},{address:"0xEd5AF388653567Af2F388E6224dC7C4b3241C544",slug:"azuki"},{address:"0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",slug:"doodles-official"},{address:"0x1A92f7381B9F03921564a437210bB9396471050C",slug:"cool-cats-nft"},{address:"0x60E4d786628Fea6478F785A6d7e704777c86a7c6",slug:"mutant-ape-yacht-club"},{address:"0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",slug:"clonex"},{address:"0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6",slug:"cryptoadz-by-gremplin"}],l="870f094e1eb441a3a9f0a6dd9672296e";export{l as a,o as c,c as m,i as s};
//# sourceMappingURL=data-Dx3yBxCc.js.map
