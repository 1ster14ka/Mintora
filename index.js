import{c as S,a as l,s as d,m as b}from"./assets/nft-card-BeUULAcM.js";/* empty css                      */import{a as c,S as C,N as L}from"./assets/vendor-SJA_hCIU.js";async function P(){return(await Promise.all(S.map(async s=>(await c.get(`https://api.opensea.io/api/v2/chain/ethereum/contract/${s.address}/nfts`,{headers:{"x-api-key":`${l}`},params:{limit:2}})).data.nfts))).flat(1)}const u=document.querySelector(".hero__img-wrapper"),_=document.querySelector(".hero__arrow-btn--prev"),y=document.querySelector(".hero__arrow-btn--next");let r=0;_.disabled=!0;y.addEventListener("click",E);let o=[];async function T(){try{o=await P(),u.innerHTML=w(o),h()}catch(e){console.error("Failed to load NFTs:",e)}}function v(){u.classList.add("is-changing"),setTimeout(()=>{u.innerHTML=w(o),u.classList.remove("is-changing"),h()},300)}function E(){r<o.length-2&&(r+=1,v())}_.addEventListener("click",M);function M(){r>0&&(r-=1,v())}function w(e){const s=e[r],t=e[r+1];return!s||!t?"":`<img
            class="hero__img hero__img--left"
            src="${s.image_url}"
            alt=${s.name??""}
          />
<svg class="hero__arrow">
          <use href="${d}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${t.image_url}"
            alt=${s.name??""}
          />
          `}T();function h(){_.disabled=r===0,y.disabled=r>=o.length-2}const q="https://api.opensea.io/api/v2/collections/trending";async function H(e){return(await c.get(q,{headers:{"x-api-key":`${l}`},params:{limit:e}})).data.collections.map(t=>({...t,identifier:t.collection,floorPrice:t.floorPrice||null}))}async function $(e,s){return(await c.get(`https://api.opensea.io/api/v2/collection/${e}/nfts`,{headers:{"x-api-key":l},params:{limit:1,cursor:s}})).data}async function I(e){const s=await H(e);return(await Promise.all(s.map(a=>$(a.collection)))).flatMap(a=>a.nfts).filter(a=>a.image_url).slice(0,8)}const F="https://api.opensea.io/api/v2/collections/top";async function x(e,s="one_day"){const a=(await c.get(F,{headers:{"x-api-key":`${l}`},params:{limit:e,timeframe:s}})).data.collections;return Promise.all(a.map(async n=>{const i=await U(n.collection);return{id:n.collection,name:n.name,username:n.instagram_username||n.twitter_username||"User",avatar:n.image_url,volume:i.volume,change24h:0,floorPrice:i.floor_price,owners:i.num_owners,items:0}}))}async function U(e){return(await c.get(`https://api.opensea.io/api/v2/collections/${e}/stats`,{headers:{"x-api-key":`${l}`}})).data.total}async function W(){const e=await x(20,"seven_days");return(await Promise.all(e.map(t=>$(t.id)))).flatMap(t=>t.nfts).filter(t=>t.image_url).map(t=>({...t,floorPrice:t.floorPrice||null}))}const j=document.querySelector(".nft-card--weekly");async function A(){try{const e=await W();console.log(e),j.innerHTML=b(e)}catch(e){console.log("Weekly is error",e)}new C(".swiper",{modules:[L],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}})}A();const B=document.querySelector(".table"),O=B.querySelector(".table__body");async function R(){try{const e=await x(10);O.insertAdjacentHTML("beforeend",K(e))}catch(e){console.log("Collections error",e)}}R();function K(e){return e.map(({id:s,name:t,username:a,avatar:n,volume:i,change24h:p,floorPrice:m,owners:k,items:N})=>` <tr class="table__body-row" data-id="${s}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${n}" alt="" />
              <div class="table__info">
                <p class="table__name">${t}</p>
                <p class="table__username">${a}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${d}#price-icon"></use>
              </svg>
              <span class="table__price">${i!=null?i.toFixed(2):"0"}</span>
            </div>
            <span class="table__change ${f(p)}">${g(p)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${f(p)}">${g(p)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="${d}#price-icon"></use>
              </svg>
              <span class="table__price">${m!=null?m.toFixed(2):"-"}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${k}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${N}</span>
          </td>
        </tr>`).join("")}function f(e){return e>0?"table__change--positive":"table__change--negative"}function g(e){return e>0?`+ ${e}`:`- ${Math.abs(e)}`}const V=document.querySelector(".nft-card--explore");async function z(){try{const e=await I(20);V.innerHTML=b(e)}catch(e){console.log("explore cards:",e)}}z();
//# sourceMappingURL=index.js.map
