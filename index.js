/* empty css                      */import{a as p,S as N,N as k}from"./assets/vendor-SJA_hCIU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const _="/Mintora/assets/sprite-D0bXH9w0.svg",w=[{address:"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",slug:"pudgypenguins"},{address:"0xEd5AF388653567Af2F388E6224dC7C4b3241C544",slug:"azuki"},{address:"0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",slug:"doodles-official"},{address:"0x1A92f7381B9F03921564a437210bB9396471050C",slug:"cool-cats-nft"},{address:"0x60E4d786628Fea6478F785A6d7e704777c86a7c6",slug:"mutant-ape-yacht-club"},{address:"0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",slug:"clonex"},{address:"0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6",slug:"cryptoadz-by-gremplin"}],f=void 0,P=`https://eth-mainnet.g.alchemy.com/nft/v3/${f}/getNFTsForContract`;async function $(){return(await Promise.all(w.map(async r=>(await p.get(P,{params:{contractAddress:r.address,withMetadata:!0,limit:2}})).data.nfts))).flat(1)}const u=document.querySelector(".hero__img-wrapper"),m=document.querySelector(".hero__arrow-btn--prev"),C=document.querySelector(".hero__arrow-btn--next");let i=0;m.disabled=!0;C.addEventListener("click",B);let l=[];async function T(){try{l=await $(),u.innerHTML=E(l),x()}catch(e){console.error("Failed to load NFTs:",e)}}function L(){u.classList.add("is-changing"),setTimeout(()=>{u.innerHTML=E(l),u.classList.remove("is-changing"),x()},300)}function B(){i<l.length-2&&(i+=1,L())}m.addEventListener("click",U);function U(){i>0&&(i-=1,L())}function E(e){var s,t;const r=e[i],n=e[i+1];return!r||!n?"":`<img
            class="hero__img hero__img--left"
            src="${(s=r.image)==null?void 0:s.cachedUrl}"
            alt=${r.name??""}
          />
<svg class="hero__arrow">
          <use href="${_}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${(t=n.image)==null?void 0:t.cachedUrl}"
            alt=${r.name??""}
          />
          `}T();function x(){m.disabled=i===0,C.disabled=i>=l.length-2}function q(e){return e.map(({id:r,collection:n,image:s,contract:t})=>{var d;const a=(n==null?void 0:n.name)??"Unknown collection",c=s==null?void 0:s.cachedUrl,o=(d=t==null?void 0:t.openSeaMetadata)==null?void 0:d.floorPrice;return`<li class="nft-card__item swiper-slide" data-id="${r}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${c}" alt="" />
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
                  <use href="${_}#price-icon"></use>
                </svg>

                <span>${o!=null?o.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`}).join("")}function I(e){return e.map(({id:r,name:n,image:s,creator:t,floorPrice:a})=>`<li class="nft-card__item swiper-slide" data-id="${r}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${s}" alt="" />
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
                  <use href="${_}#price-icon"></use>
                </svg>

                <span>${a?a.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`).join("")}const H="0xEd5AF388653567Af2F388E6224dC7C4b3241C544",D=`https://eth-mainnet.g.alchemy.com/nft/v3/${f}/getNFTsForContract`;async function O(){return(await p.get(D,{params:{contractAddress:H,withMetadata:!0,limit:20}})).data.nfts.map(n=>{var s,t,a,c;return{id:n.tokenId,image:(s=n.image)==null?void 0:s.cachedUrl,name:n.name,creator:(t=n.contract)==null?void 0:t.contractDeployer,floorPrice:(c=(a=n.contract)==null?void 0:a.openSeaMetadata)==null?void 0:c.floorPrice}})}const j=document.querySelector(".nft-card--weekly");async function W(){try{const e=await O();j.innerHTML=I(e)}catch(e){console.log("Weekly is error",e)}new N(".swiper",{modules:[k],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}})}W();const X=`https://eth-mainnet.g.alchemy.com/nft/v3/${f}/getContractMetadata`;async function R(){return await Promise.all(w.map(async r=>{var t,a,c,o;const s=(await p.get(X,{params:{contractAddress:r.address}})).data;return{id:s.address,name:((t=s.openSeaMetadata)==null?void 0:t.collectionName)??s.name,username:(a=s.openSeaMetadata)!=null&&a.twitterUsername?`@${s.openSeaMetadata.twitterUsername}`:"",avatar:(c=s.openSeaMetadata)==null?void 0:c.imageUrl,volume:"-",change24h:0,floorPrice:((o=s.openSeaMetadata)==null?void 0:o.floorPrice)??null,items:Number(s.totalSupply)||0,owners:"-"}}))}const z=document.querySelector(".table"),K=z.querySelector(".table__body");async function V(){try{const e=await R();K.insertAdjacentHTML("beforeend",G(e))}catch(e){console.log("Collections error",e)}}V();function G(e){return e.map(({id:r,name:n,username:s,avatar:t,volume:a,change24h:c,floorPrice:o,owners:d,items:F})=>` <tr class="table__body-row" data-id="${r}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${t}" alt="" />
              <div class="table__info">
                <p class="table__name">${n}</p>
                <p class="table__username">${s}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${a}</span>
            </div>
            <span class="table__change ${h(c)}">${y(c)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${h(c)}">${y(c)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${o!=null?o.toFixed(2):"-"}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${d}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${F}</span>
          </td>
        </tr>`).join("")}function h(e){return e>0?"table__change--positive":"table__change--negative"}function y(e){return e>0?`+ ${e}`:`- ${Math.abs(e)}`}const S=document.querySelector(".nft-card--explore");async function J(){try{const e=await $();S.innerHTML=q(e.slice(0,8))}catch(e){console.log("explore cards:",e)}}J();[...S.children];const g=document.querySelector(".nav__menu-button"),b=document.querySelector(".page"),M=document.querySelector(".mobile-menu");g.addEventListener("click",Y);b.addEventListener("click",Q);function Q(e){e.target.classList.contains("page")&&v()}document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});let A=0;M.addEventListener("touchstart",e=>{A=e.changedTouches[0].screenX});M.addEventListener("touchend",e=>{e.changedTouches[0].screenX-A>80&&v()});function Y(){b.classList.add("is-menu-open"),g.classList.add("is-open"),document.body.classList.add("no-scroll")}function v(){b.classList.remove("is-menu-open"),g.classList.remove("is-open"),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=index.js.map
