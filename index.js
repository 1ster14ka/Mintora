import{c as H,a as l,s as m,m as w}from"./assets/nft-card-BeUULAcM.js";/* empty css                      */import{a as p,S as I,N as F}from"./assets/vendor-SJA_hCIU.js";import{g as W,o as h,r as $,c as U}from"./assets/filter-collection-CS6hb00i.js";async function j(){return(await Promise.all(H.map(async n=>(await p.get(`https://api.opensea.io/api/v2/chain/ethereum/contract/${n.address}/nfts`,{headers:{"x-api-key":`${l}`},params:{limit:2}})).data.nfts))).flat(1)}const d=document.querySelector(".hero__img-wrapper"),g=document.querySelector(".hero__arrow-btn--prev"),x=document.querySelector(".hero__arrow-btn--next");let r=0;g.disabled=!0;x.addEventListener("click",B);let c=[];async function A(){try{c=await j(),d.innerHTML=N(c),C()}catch(e){console.error("Failed to load NFTs:",e)}}function k(){d.classList.add("is-changing"),setTimeout(()=>{d.innerHTML=N(c),d.classList.remove("is-changing"),C()},300)}function B(){r<c.length-2&&(r+=1,k())}g.addEventListener("click",O);function O(){r>0&&(r-=1,k())}function N(e){const n=e[r],t=e[r+1];return!n||!t?"":`<img
            class="hero__img hero__img--left"
            src="${n.image_url}"
            alt=${n.name??""}
          />
<svg class="hero__arrow">
          <use href="${m}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${t.image_url}"
            alt=${n.name??""}
          />
          `}A();function C(){g.disabled=r===0,x.disabled=r>=c.length-2}const R="https://api.opensea.io/api/v2/collections/trending";async function D(e){return(await p.get(R,{headers:{"x-api-key":`${l}`},params:{limit:e}})).data.collections.map(t=>({...t,identifier:t.collection,floorPrice:t.floorPrice||null}))}async function L(e=null){const n=await W(e);return{collections:[...new Map(n.collections.map(s=>[`${s.collection}-${s.chain}`,s])).values()],next:n.next}}async function S(e,n){return(await p.get(`https://api.opensea.io/api/v2/collection/${e}/nfts`,{headers:{"x-api-key":l},params:{limit:1,cursor:n}})).data}async function K(e){const n=await D(e);return(await Promise.all(n.map(async s=>({...(await S(s.collection)).nfts[0],chain:s.contracts[0].chain,contract:s.contracts[0].address})))).flatMap(s=>s).filter(s=>s.image_url).slice(0,8)}const V="https://api.opensea.io/api/v2/collections/top";async function E(e,n="one_day"){const s=(await p.get(V,{headers:{"x-api-key":`${l}`},params:{limit:e,timeframe:n}})).data.collections;return Promise.all(s.map(async a=>{const o=await z(a.collection);return{chain:a.contracts[0].chain,contract:a.contracts[0].address,id:a.collection,name:a.name,username:a.instagram_username||a.twitter_username||"User",avatar:a.image_url,volume:o.volume,change24h:0,floorPrice:o.floor_price,owners:o.num_owners,items:0}}))}async function z(e){return(await p.get(`https://api.opensea.io/api/v2/collections/${e}/stats`,{headers:{"x-api-key":`${l}`}})).data.total}async function G(){const e=await E(20,"seven_days");return(await Promise.all(e.map(async t=>({...(await S(t.id)).nfts[0],...t})))).flatMap(t=>t).filter(t=>t.image_url).map(t=>({...t,floorPrice:t.floorPrice||null}))}const T=document.querySelector(".nft-card--weekly");T.addEventListener("click",h);async function J(){try{const e=await G();T.innerHTML=w(e)}catch(e){console.log("Weekly is error",e)}new I(".swiper",{modules:[F],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}})}J();const Q=document.querySelector(".table"),X=Q.querySelector(".table__body");async function Y(){try{const e=await E(10);X.insertAdjacentHTML("beforeend",Z(e))}catch(e){console.log("Collections error",e)}}Y();function Z(e){return e.map(({id:n,name:t,username:s,avatar:a,volume:o,change24h:u,floorPrice:b,owners:P,items:q})=>` <tr class="table__body-row" data-id="${n}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${a}" alt="" />
              <div class="table__info">
                <p class="table__name">${t}</p>
                <p class="table__username">${s}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${m}#price-icon"></use>
              </svg>
              <span class="table__price">${o!=null?o.toFixed(2):"0"}</span>
            </div>
            <span class="table__change ${y(u)}">${v(u)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${y(u)}">${v(u)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${m}#price-icon"></use>
              </svg>
              <span class="table__price">${b!=null?b.toFixed(2):"-"}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${P}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${q}</span>
          </td>
        </tr>`).join("")}function y(e){return e>0?"table__change--positive":"table__change--negative"}function v(e){return e>0?`+ ${e}`:`- ${Math.abs(e)}`}const M=document.querySelector(".nft-card--explore"),ee=document.querySelector(".explore__sort"),_=document.querySelector(".btn__collection-filter");let f=null,i=null;ee.addEventListener("click",te);async function te(e){const n=e.target.closest("button");if(n){if(n.classList.contains("btn-collection")){const t=await L();f=t.next,i=t.collections,$(_,i);return}if(n.dataset.id){_.innerHTML="",U(_);const{chain:t,id:s}=n.dataset;window.location.href=`discover.html?chain=${t}&collection=${s}`}if(n.dataset.more){ne();return}}}async function ne(){if(f)try{const e=await L(f);f=e.next,i=[...i,...e.collections],$(_,i)}catch(e){console.log(e)}}M.addEventListener("click",h);async function se(){try{const e=await K(20);M.innerHTML=w(e)}catch(e){console.log("explore cards:",e)}}se();
//# sourceMappingURL=index.js.map
