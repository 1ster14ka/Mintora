import{c as I,a as y}from"./assets/data-rSeLe94G.js";/* empty css                      */import{s as p,m as v}from"./assets/nft-card-BXbr5bNh.js";import{a as w,S as P,N as F}from"./assets/vendor-SJA_hCIU.js";import{g as W,a as h}from"./assets/collections-api-DT1BR3cO.js";import{g as $}from"./assets/top-collection-api-DXM9PNhG.js";import{o as x}from"./assets/nft-CyXKnPQk.js";import{r as N,c as j}from"./assets/filter-collection-FBhicFYI.js";import"./assets/discover-api-hEdItt07.js";async function A(){return(await Promise.all(I.map(async n=>(await w.get(`https://api.opensea.io/api/v2/chain/ethereum/contract/${n.address}/nfts`,{headers:{"x-api-key":`${y}`},params:{limit:2}})).data.nfts))).flat(1)}const i=document.querySelector(".hero__img-wrapper"),u=document.querySelector(".hero__arrow-btn--prev"),k=document.querySelector(".hero__arrow-btn--next");let a=0;u.disabled=!0;k.addEventListener("click",O);let o=[];async function B(){try{o=await A(),i.innerHTML=L(o),S()}catch(t){console.error("Failed to load NFTs:",t)}}function C(){i.classList.add("is-changing"),setTimeout(()=>{i.innerHTML=L(o),i.classList.remove("is-changing"),S()},300)}function O(){a<o.length-2&&(a+=1,C())}u.addEventListener("click",K);function K(){a>0&&(a-=1,C())}function L(t){const n=t[a],e=t[a+1];return!n||!e?"":`<img
            class="hero__img hero__img--left"
            src="${n.image_url}"
            alt=${n.name??""}
          />
<svg class="hero__arrow">
          <use href="${p}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${e.image_url}"
            alt=${n.name??""}
          />
          `}B();function S(){u.disabled=a===0,k.disabled=a>=o.length-2}async function E(t,n){return(await w.get(`https://api.opensea.io/api/v2/collection/${t}/nfts`,{headers:{"x-api-key":y},params:{limit:1,cursor:n}})).data}async function V(t){const n=await W(t);return(await Promise.all(n.map(async s=>({...(await E(s.collection)).nfts[0],chain:s.contracts[0].chain,contract:s.contracts[0].address})))).flatMap(s=>s).filter(s=>s.image_url).slice(0,8)}async function z(){const t=await $(20,"seven_days");return(await Promise.all(t.map(async e=>({...(await E(e.id)).nfts[0],...e})))).flatMap(e=>e).filter(e=>e.image_url).map(e=>({...e,floorPrice:e.floorPrice||null}))}const T=document.querySelector(".nft-card--weekly");T.addEventListener("click",x);async function D(){try{const t=await z();T.innerHTML=v(t)}catch(t){console.log("Weekly is error",t)}new P(".swiper",{modules:[F],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}})}D();const G=document.querySelector(".table"),J=G.querySelector(".table__body");async function Q(){try{const t=await $(10);J.insertAdjacentHTML("beforeend",R(t))}catch(t){console.log("Collections error",t)}}Q();function R(t){return t.map(({id:n,name:e,username:s,avatar:_,volume:f,change24h:l,floorPrice:m,owners:q,items:H})=>` <tr class="table__body-row" data-id="${n}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${_}" alt="" />
              <div class="table__info">
                <p class="table__name">${e}</p>
                <p class="table__username">${s}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${p}#price-icon"></use>
              </svg>
              <span class="table__price">${f!=null?f.toFixed(2):"0"}</span>
            </div>
            <span class="table__change ${g(l)}">${b(l)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${g(l)}">${b(l)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${p}#price-icon"></use>
              </svg>
              <span class="table__price">${m!=null?m.toFixed(2):"-"}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${q}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${H}</span>
          </td>
        </tr>`).join("")}function g(t){return t>0?"table__change--positive":"table__change--negative"}function b(t){return t>0?`+ ${t}`:`- ${Math.abs(t)}`}const M=document.querySelector(".nft-card--explore"),U=document.querySelector(".explore__sort"),c=document.querySelector(".btn__collection-filter");let d=null,r=null;U.addEventListener("click",X);async function X(t){const n=t.target.closest("button");if(n){if(n.classList.contains("btn-collection")){const e=await h();d=e.next,r=e.collections,N(c,r);return}if(n.dataset.id){c.innerHTML="",j(c);const{chain:e,id:s}=n.dataset;window.location.href=`discover.html?chain=${e}&collection=${s}`}if(n.dataset.more){Y();return}}}async function Y(){if(d)try{const t=await h(d);d=t.next,r=[...r,...t.collections],N(c,r)}catch(t){console.log(t)}}M.addEventListener("click",x);async function Z(){try{const t=await V(20);M.innerHTML=v(t)}catch(t){console.log("explore cards:",t)}}Z();
//# sourceMappingURL=index.js.map
