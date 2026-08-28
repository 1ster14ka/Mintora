import{c as H,a as d}from"./assets/data-rSeLe94G.js";/* empty css                      */import{s as u,o as w,m as h}from"./assets/nft-BD5lowNQ.js";import{a as _,S as I,N as F}from"./assets/vendor-SJA_hCIU.js";import{g as W,r as $,c as j}from"./assets/filter-collection-BvyAJE0u.js";import{g as x}from"./assets/top-collection-api-DXM9PNhG.js";async function A(){return(await Promise.all(H.map(async n=>(await _.get(`https://api.opensea.io/api/v2/chain/ethereum/contract/${n.address}/nfts`,{headers:{"x-api-key":`${d}`},params:{limit:2}})).data.nfts))).flat(1)}const l=document.querySelector(".hero__img-wrapper"),f=document.querySelector(".hero__arrow-btn--prev"),N=document.querySelector(".hero__arrow-btn--next");let a=0;f.disabled=!0;N.addEventListener("click",O);let r=[];async function B(){try{r=await A(),l.innerHTML=C(r),L()}catch(e){console.error("Failed to load NFTs:",e)}}function k(){l.classList.add("is-changing"),setTimeout(()=>{l.innerHTML=C(r),l.classList.remove("is-changing"),L()},300)}function O(){a<r.length-2&&(a+=1,k())}f.addEventListener("click",D);function D(){a>0&&(a-=1,k())}function C(e){const n=e[a],t=e[a+1];return!n||!t?"":`<img
            class="hero__img hero__img--left"
            src="${n.image_url}"
            alt=${n.name??""}
          />
<svg class="hero__arrow">
          <use href="${u}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${t.image_url}"
            alt=${n.name??""}
          />
          `}B();function L(){f.disabled=a===0,N.disabled=a>=r.length-2}const K="https://api.opensea.io/api/v2/collections/trending";async function R(e){return(await _.get(K,{headers:{"x-api-key":`${d}`},params:{limit:e}})).data.collections.map(t=>({...t,identifier:t.collection,floorPrice:t.floorPrice||null}))}async function S(e=null){const n=await W(e);return{collections:[...new Map(n.collections.map(s=>[`${s.collection}-${s.chain}`,s])).values()],next:n.next}}async function E(e,n){return(await _.get(`https://api.opensea.io/api/v2/collection/${e}/nfts`,{headers:{"x-api-key":d},params:{limit:1,cursor:n}})).data}async function U(e){const n=await R(e);return(await Promise.all(n.map(async s=>({...(await E(s.collection)).nfts[0],chain:s.contracts[0].chain,contract:s.contracts[0].address})))).flatMap(s=>s).filter(s=>s.image_url).slice(0,8)}async function V(){const e=await x(20,"seven_days");return(await Promise.all(e.map(async t=>({...(await E(t.id)).nfts[0],...t})))).flatMap(t=>t).filter(t=>t.image_url).map(t=>({...t,floorPrice:t.floorPrice||null}))}const T=document.querySelector(".nft-card--weekly");T.addEventListener("click",w);async function z(){try{const e=await V();T.innerHTML=h(e)}catch(e){console.log("Weekly is error",e)}new I(".swiper",{modules:[F],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}})}z();const G=document.querySelector(".table"),J=G.querySelector(".table__body");async function Q(){try{const e=await x(10);J.insertAdjacentHTML("beforeend",X(e))}catch(e){console.log("Collections error",e)}}Q();function X(e){return e.map(({id:n,name:t,username:s,avatar:m,volume:g,change24h:i,floorPrice:b,owners:q,items:P})=>` <tr class="table__body-row" data-id="${n}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${m}" alt="" />
              <div class="table__info">
                <p class="table__name">${t}</p>
                <p class="table__username">${s}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${u}#price-icon"></use>
              </svg>
              <span class="table__price">${g!=null?g.toFixed(2):"0"}</span>
            </div>
            <span class="table__change ${y(i)}">${v(i)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${y(i)}">${v(i)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${u}#price-icon"></use>
              </svg>
              <span class="table__price">${b!=null?b.toFixed(2):"-"}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${q}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${P}</span>
          </td>
        </tr>`).join("")}function y(e){return e>0?"table__change--positive":"table__change--negative"}function v(e){return e>0?`+ ${e}`:`- ${Math.abs(e)}`}const M=document.querySelector(".nft-card--explore"),Y=document.querySelector(".explore__sort"),c=document.querySelector(".btn__collection-filter");let p=null,o=null;Y.addEventListener("click",Z);async function Z(e){const n=e.target.closest("button");if(n){if(n.classList.contains("btn-collection")){const t=await S();p=t.next,o=t.collections,$(c,o);return}if(n.dataset.id){c.innerHTML="",j(c);const{chain:t,id:s}=n.dataset;window.location.href=`discover.html?chain=${t}&collection=${s}`}if(n.dataset.more){ee();return}}}async function ee(){if(p)try{const e=await S(p);p=e.next,o=[...o,...e.collections],$(c,o)}catch(e){console.log(e)}}M.addEventListener("click",w);async function te(){try{const e=await U(20);M.innerHTML=h(e)}catch(e){console.log("explore cards:",e)}}te();
//# sourceMappingURL=index.js.map
