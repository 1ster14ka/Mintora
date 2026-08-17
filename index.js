/* empty css                      */import{a as l,S as F,N as P}from"./assets/vendor-SJA_hCIU.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const p="/Mintora/assets/sprite-D0bXH9w0.svg";function h(e){return e.map(({identifier:n,name:t,image_url:o,floorPrice:s=null})=>`<li class="nft-card__item swiper-slide" data-id="${n}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${o}" alt="" />
            <div class="nft__timer">
              <span>00H</span>
              <span>00m</span>
              <span>00s</span>
            </div>
          </div>

          <h3 class="nft__name">${t}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="${p}#price-icon"></use>
                </svg>

                <span>${s!=null?s.toFixed(2):0}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`).join("")}const M=[{address:"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",slug:"pudgypenguins"},{address:"0xEd5AF388653567Af2F388E6224dC7C4b3241C544",slug:"azuki"},{address:"0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",slug:"doodles-official"},{address:"0x1A92f7381B9F03921564a437210bB9396471050C",slug:"cool-cats-nft"},{address:"0x60E4d786628Fea6478F785A6d7e704777c86a7c6",slug:"mutant-ape-yacht-club"},{address:"0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",slug:"clonex"},{address:"0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6",slug:"cryptoadz-by-gremplin"}],d="870f094e1eb441a3a9f0a6dd9672296e";console.log(console.log("API KEY EXISTS:",!0));async function T(){return(await Promise.all(M.map(async n=>(await l.get(`https://api.opensea.io/api/v2/chain/ethereum/contract/${n.address}/nfts`,{headers:{"x-api-key":`${d}`},params:{limit:2}})).data.nfts))).flat(1)}const u=document.querySelector(".hero__img-wrapper"),f=document.querySelector(".hero__arrow-btn--prev"),w=document.querySelector(".hero__arrow-btn--next");let i=0;f.disabled=!0;w.addEventListener("click",B);let c=[];async function q(){try{c=await T(),u.innerHTML=x(c),L()}catch(e){console.error("Failed to load NFTs:",e)}}function $(){u.classList.add("is-changing"),setTimeout(()=>{u.innerHTML=x(c),u.classList.remove("is-changing"),L()},300)}function B(){i<c.length-2&&(i+=1,$())}f.addEventListener("click",I);function I(){i>0&&(i-=1,$())}function x(e){const n=e[i],t=e[i+1];return!n||!t?"":`<img
            class="hero__img hero__img--left"
            src="${n.image_url}"
            alt=${n.name??""}
          />
<svg class="hero__arrow">
          <use href="${p}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${t.image_url}"
            alt=${n.name??""}
          />
          `}q();function L(){f.disabled=i===0,w.disabled=i>=c.length-2}const H="https://api.opensea.io/api/v2/collections/trending";async function O(e){return(await l.get(H,{headers:{"x-api-key":`${d}`},params:{limit:e}})).data.collections.map(t=>({...t,identifier:t.collection,floorPrice:t.floorPrice||null}))}async function E(e,n){return(await l.get(`https://api.opensea.io/api/v2/collection/${e}/nfts`,{headers:{"x-api-key":d},params:{limit:1,cursor:n}})).data}async function D(){const e=await O(20);return(await Promise.all(e.map(t=>E(t.collection)))).flatMap(t=>t.nfts).filter(t=>t.image_url)}const X="https://api.opensea.io/api/v2/collections/top";async function C(e,n="one_day"){const o=(await l.get(X,{headers:{"x-api-key":`${d}`},params:{limit:e,timeframe:n}})).data.collections;return Promise.all(o.map(async s=>{const a=await j(s.collection);return{id:s.collection,name:s.name,username:s.instagram_username||s.twitter_username||"User",avatar:s.image_url,volume:a.volume,change24h:0,floorPrice:a.floor_price,owners:a.num_owners,items:0}}))}async function j(e){return(await l.get(`https://api.opensea.io/api/v2/collections/${e}/stats`,{headers:{"x-api-key":`${d}`}})).data.total}async function K(){const e=await C(20,"seven_days");return(await Promise.all(e.map(t=>E(t.id)))).flatMap(t=>t.nfts).filter(t=>t.image_url).map(t=>({...t,floorPrice:t.floorPrice||null}))}const U=document.querySelector(".nft-card--weekly");async function W(){try{const e=await K();console.log(e),U.innerHTML=h(e)}catch(e){console.log("Weekly is error",e)}new F(".swiper",{modules:[P],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}})}W();const z=document.querySelector(".table"),R=z.querySelector(".table__body");async function V(){try{const e=await C(10);R.insertAdjacentHTML("beforeend",Y(e))}catch(e){console.log("Collections error",e)}}V();function Y(e){return e.map(({id:n,name:t,username:o,avatar:s,volume:a,change24h:r,floorPrice:b,owners:A,items:k})=>` <tr class="table__body-row" data-id="${n}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${s}" alt="" />
              <div class="table__info">
                <p class="table__name">${t}</p>
                <p class="table__username">${o}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${p}#price-icon"></use>
              </svg>
              <span class="table__price">${a!=null?a.toFixed(2):"0"}</span>
            </div>
            <span class="table__change ${v(r)}">${y(r)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${v(r)}">${y(r)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${p}#price-icon"></use>
              </svg>
              <span class="table__price">${b!=null?b.toFixed(2):"-"}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${A}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${k}</span>
          </td>
        </tr>`).join("")}function v(e){return e>0?"table__change--positive":"table__change--negative"}function y(e){return e>0?`+ ${e}`:`- ${Math.abs(e)}`}const G=document.querySelector(".nft-card--explore");async function J(){try{const e=await D();G.innerHTML=h(e)}catch(e){console.log("explore cards:",e)}}J();const _=document.querySelector(".nav__menu-button"),m=document.querySelector(".page"),N=document.querySelector(".mobile-menu");_.addEventListener("click",Z);m.addEventListener("click",Q);function Q(e){e.target.classList.contains("page")&&g()}document.addEventListener("keydown",e=>{e.key==="Escape"&&g()});let S=0;N.addEventListener("touchstart",e=>{S=e.changedTouches[0].screenX});N.addEventListener("touchend",e=>{e.changedTouches[0].screenX-S>80&&g()});function Z(){m.classList.add("is-menu-open"),_.classList.add("is-open"),document.body.classList.add("no-scroll")}function g(){m.classList.remove("is-menu-open"),_.classList.remove("is-open"),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=index.js.map
