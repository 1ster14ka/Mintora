import{c as C,a as c,s as u,m as h}from"./assets/data-Dx3yBxCc.js";/* empty css                      */import{a as l,S as P,N as q}from"./assets/vendor-SJA_hCIU.js";async function H(){return(await Promise.all(C.map(async s=>(await l.get(`https://api.opensea.io/api/v2/chain/ethereum/contract/${s.address}/nfts`,{headers:{"x-api-key":`${c}`},params:{limit:2}})).data.nfts))).flat(1)}const p=document.querySelector(".hero__img-wrapper"),m=document.querySelector(".hero__arrow-btn--prev"),w=document.querySelector(".hero__arrow-btn--next");let o=0;m.disabled=!0;w.addEventListener("click",F);let r=[];async function I(){try{r=await H(),p.innerHTML=L(r),x()}catch(e){console.error("Failed to load NFTs:",e)}}function $(){p.classList.add("is-changing"),setTimeout(()=>{p.innerHTML=L(r),p.classList.remove("is-changing"),x()},300)}function F(){o<r.length-2&&(o+=1,$())}m.addEventListener("click",U);function U(){o>0&&(o-=1,$())}function L(e){const s=e[o],t=e[o+1];return!s||!t?"":`<img
            class="hero__img hero__img--left"
            src="${s.image_url}"
            alt=${s.name??""}
          />
<svg class="hero__arrow">
          <use href="${u}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${t.image_url}"
            alt=${s.name??""}
          />
          `}I();function x(){m.disabled=o===0,w.disabled=o>=r.length-2}const W="https://api.opensea.io/api/v2/collections/trending";async function X(e){return(await l.get(W,{headers:{"x-api-key":`${c}`},params:{limit:e}})).data.collections.map(t=>({...t,identifier:t.collection,floorPrice:t.floorPrice||null}))}async function k(e,s){return(await l.get(`https://api.opensea.io/api/v2/collection/${e}/nfts`,{headers:{"x-api-key":c},params:{limit:1,cursor:s}})).data}async function j(e){const s=await X(e);return(await Promise.all(s.map(n=>k(n.collection)))).flatMap(n=>n.nfts).filter(n=>n.image_url).slice(0,8)}const A="https://api.opensea.io/api/v2/collections/top";async function E(e,s="one_day"){const n=(await l.get(A,{headers:{"x-api-key":`${c}`},params:{limit:e,timeframe:s}})).data.collections;return Promise.all(n.map(async a=>{const i=await B(a.collection);return{id:a.collection,name:a.name,username:a.instagram_username||a.twitter_username||"User",avatar:a.image_url,volume:i.volume,change24h:0,floorPrice:i.floor_price,owners:i.num_owners,items:0}}))}async function B(e){return(await l.get(`https://api.opensea.io/api/v2/collections/${e}/stats`,{headers:{"x-api-key":`${c}`}})).data.total}async function D(){const e=await E(20,"seven_days");return(await Promise.all(e.map(t=>k(t.id)))).flatMap(t=>t.nfts).filter(t=>t.image_url).map(t=>({...t,floorPrice:t.floorPrice||null}))}const O=document.querySelector(".nft-card--weekly");async function R(){try{const e=await D();console.log(e),O.innerHTML=h(e)}catch(e){console.log("Weekly is error",e)}new P(".swiper",{modules:[q],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}})}R();const K=document.querySelector(".table"),V=K.querySelector(".table__body");async function z(){try{const e=await E(10);V.insertAdjacentHTML("beforeend",G(e))}catch(e){console.log("Collections error",e)}}z();function G(e){return e.map(({id:s,name:t,username:n,avatar:a,volume:i,change24h:d,floorPrice:b,owners:M,items:T})=>` <tr class="table__body-row" data-id="${s}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${a}" alt="" />
              <div class="table__info">
                <p class="table__name">${t}</p>
                <p class="table__username">${n}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${u}#price-icon"></use>
              </svg>
              <span class="table__price">${i!=null?i.toFixed(2):"0"}</span>
            </div>
            <span class="table__change ${v(d)}">${y(d)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${v(d)}">${y(d)}%</span>
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
            <span class="table__text table__owners">${M}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${T}</span>
          </td>
        </tr>`).join("")}function v(e){return e>0?"table__change--positive":"table__change--negative"}function y(e){return e>0?`+ ${e}`:`- ${Math.abs(e)}`}const J=document.querySelector(".nft-card--explore");async function Q(){try{const e=await j(20);J.innerHTML=h(e)}catch(e){console.log("explore cards:",e)}}Q();const _=document.querySelector(".nav__menu-button"),f=document.querySelector(".page"),N=document.querySelector(".mobile-menu");_.addEventListener("click",Z);f.addEventListener("click",Y);function Y(e){e.target.classList.contains("page")&&g()}document.addEventListener("keydown",e=>{e.key==="Escape"&&g()});let S=0;N.addEventListener("touchstart",e=>{S=e.changedTouches[0].screenX});N.addEventListener("touchend",e=>{e.changedTouches[0].screenX-S>80&&g()});function Z(){f.classList.add("is-menu-open"),_.classList.add("is-open"),document.body.classList.add("no-scroll")}function g(){f.classList.remove("is-menu-open"),_.classList.remove("is-open"),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=index.js.map
