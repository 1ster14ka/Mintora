import"./assets/mobile-menu-Bg9cRT26.js";/* empty css                      */import{g as $}from"./assets/top-collection-api-BUuVUJgL.js";import{a as v}from"./assets/owner-api-BzvEvSJm.js";import{a as x}from"./assets/nft-CyXKnPQk.js";import{l as g,a as d}from"./assets/loader-Dgax0xZa.js";import"./assets/vendor-SJA_hCIU.js";import"./assets/data-Bj2U36bo.js";function y(t){return t.map(({avatar:a,username:n,nfts:r,floorPrice:i,owners:f,volume:s,owner:l})=>{var m,p,u;return`<li class="nft__creator-item" data-address="${l}">
      <div class="nft__creator-bg"><img class="nft__creator-img-bg" src="${a}"/></div>
  <div class="nft__creator-wrapper">
  <img class="nft__creator-img" src="${a}"/></div>
  <p class="nft__creator-username">${n}</p>

  <ul class="nft__creator-stats">
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Price</p>
  <p class="nft__creator-info">${i}</p>
  </li>
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Owners</p>
  <p class="nft__creator-info">${f}</p>
  </li>
  <li class="nft__creator-stats-item">
  <p class="nft__creator-stats-text">Volume</p>
  <p class="nft__creator-info">${s.toFixed(2)}</p>
  </li>
  </ul>

  <ul class="nft__creator__list">
  <li class="nft__creator__item"><img class="nft__creator__img"src="${(m=r[0])==null?void 0:m.image_url}"/></li>
  <li class="nft__creator__item"><img class="nft__creator__img" src="${(p=r[1])==null?void 0:p.image_url}"/></li>
  <li class="nft__creator__item">
  <div class="nft__creator__img-wrapper">
  <img class="nft__creator__img" src="${(u=r[2])==null?void 0:u.image_url}"/>
  <p class="nft__creator-cards">${r.length?`+${r.length}`:0}</p>
  </div></li>
  </ul>
  </li>`}).join("")}const _=document.querySelector(".nft__creator-list"),c=document.querySelector(".loader"),C=document.querySelector(".load-more-trigger");let e,o;async function w(t=9,a="one_day",n){const{collections:r,next:i}=await $(t,a,n);return{creators:await Promise.all(r.map(async s=>{const l=await v(s.chain,s.owner);return{...s,nfts:l.nfts}})),next:i}}_.addEventListener("click",x);async function b(){g(c),e=!0;try{const t=await w();o=t.next,_.innerHTML=y(t.creators)}catch(t){console.log(t)}finally{e=!1,d(c)}}async function h(){if(!(!o||e))try{e=!0,g(c);const t=await w(9,"one_day",o);o=t.next,_.insertAdjacentHTML("beforeend",y(t.creators))}catch(t){console.log(t)}finally{e=!1,d(c)}}const L=new IntersectionObserver(t=>{!t[0].isIntersecting||e||h()},{rootMargin:"400px"});L.observe(C);b();
//# sourceMappingURL=creators.js.map
