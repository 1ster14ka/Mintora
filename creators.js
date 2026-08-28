import"./assets/data-rSeLe94G.js";/* empty css                      */import{g as l}from"./assets/top-collection-api-DXM9PNhG.js";import{a as m}from"./assets/owner-api-DULqRX0-.js";import"./assets/vendor-SJA_hCIU.js";function f(t){return t.map(({avatar:r,username:a,nfts:s,floorPrice:i,owners:o,volume:n})=>{var c,_,e;return`<li class="nft__creator-item">
      <div class="nft__creator-bg"><img class="nft__creator-img-bg" src="${r}"/></div>
  <div class="nft__creator-wrapper">
  <img class="nft__creator-img" src="${r}"/></div>
  <p class="nft__creator-username">${a}</p>

  <ul class="nft__creator-stats">
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Price</p>
  <p class="nft__creator-info">${i}</p>
  </li>
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Owners</p>
  <p class="nft__creator-info">${o}</p>
  </li>
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Volume</p>
  <p class="nft__creator-info">${n.toFixed(2)}</p>
  </li>
  </ul>

  <ul class="nft__creator__list">
  <li class="nft__creator__item"><img class="nft__creator__img"src="${(c=s[0])==null?void 0:c.image_url}"/></li>
  <li class="nft__creator__item"><img class="nft__creator__img" src="${(_=s[1])==null?void 0:_.image_url}"/></li>
  <li class="nft__creator__item">
  <div class="nft__creator__img-wrapper">
  <img class="nft__creator__img" src="${(e=s[2])==null?void 0:e.image_url}"/>
  <p class="nft__creator-cards">${s.length?`+${s.length}`:0}</p>
  </div></li>
  </ul>
  </li>`}).join("")}const p=document.querySelector(".nft__creator-list");async function g(){const t=await l(6);return Promise.all(t.map(async r=>{const a=await m(r.chain,r.owner);return{...r,nfts:a.nfts}}))}async function u(){try{const t=await g();p.innerHTML=f(t)}catch(t){console.log(t)}}u();
//# sourceMappingURL=creators.js.map
