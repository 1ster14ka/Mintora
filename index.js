/* empty css                      */import{S as x,N as P}from"./assets/vendor-BvPe3f8Z.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const k="/Mintora/assets/hero-1-D15dTB8m.jpg",q="/Mintora/assets/hero-2-Cqx6J_gx.jpg",B="/Mintora/assets/hero-1-D15dTB8m.jpg",N="/Mintora/assets/hero-1-D15dTB8m.jpg",D="/Mintora/assets/hero-2-Cqx6J_gx.jpg",L="/Mintora/assets/sprite-D0bXH9w0.svg",l=document.querySelector(".hero__img-wrapper"),p=document.querySelector(".hero__arrow-btn--prev"),g=document.querySelector(".hero__arrow-btn--next"),m=[{id:1,image:k},{id:2,image:q},{id:3,image:B},{id:4,image:N},{id:5,image:D}];let u=0;p.disabled=!0;g.addEventListener("click",I);function I(){p.disabled=!1,u+=1,u+2===m.length&&(g.disabled=!0),l.classList.add("is-changing"),setTimeout(()=>{l.innerHTML=f(m),l.classList.remove("is-changing")},300)}p.addEventListener("click",j);function j(){g.disabled=!1,u-=1,u===0&&(p.disabled=!0),l.classList.add("is-changing"),setTimeout(()=>{l.innerHTML=f(m),l.classList.remove("is-changing")},300)}function f(e){const n=e[u],r=e[u+1];return`<img
            class="hero__img hero__img--left"
            src="${n.image}"
            alt=""
          />
<svg class="hero__arrow">
          <use href="${L}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${r.image}"
            alt=""
          />
          `}l.innerHTML=f(m);const i="/Mintora/assets/hero-1-D15dTB8m.jpg",$=[{id:1,name:"Viktor",image:i,auctionEnd:"2026-08-16T19:04:00",currentBid:"1.25"},{id:2,name:"Cyber Ape",image:i,auctionEnd:"2026-08-16T12:45:00",currentBid:"2.40"},{id:3,name:"Meta Punk",image:i,auctionEnd:"2026-08-14T21:20:00",currentBid:"0.85"},{id:4,name:"Space Girl",image:i,auctionEnd:"2026-08-17T18:10:00",currentBid:"3.10"},{id:5,name:"Crypto Cat",image:i,auctionEnd:"2026-08-15T09:30:00",currentBid:"1.75"},{id:6,name:"Digital Soul",image:i,auctionEnd:"2026-08-18T14:00:00",currentBid:"4.20"},{id:7,name:"Neon Monkey",image:i,auctionEnd:"2026-08-16T20:15:00",currentBid:"2.90"},{id:8,name:"Future Face",image:i,auctionEnd:"2026-08-19T11:45:00",currentBid:"1.05"}],E=document.querySelector(".nft-card--weekly");E.innerHTML=K($);const H=[...E.children];function O(){setInterval(()=>{H.forEach(e=>{const n=$.find(({id:c})=>c===Number(e.dataset.id)),{hours:r,minutes:o,seconds:t}=M(n.auctionEnd),a=e.querySelector(".nft__timer").querySelectorAll("span");a[0].textContent=d(r,"H"),a[1].textContent=d(o,"m"),a[2].textContent=d(t,"s")})},1e3)}O();function M(e){const n=new Date,o=new Date(e)-n;if(o<=0)return{hours:0,minutes:0,seconds:0};const t=Math.floor(o/1e3),s=Math.floor(t/3600),a=Math.floor(t%3600/60),c=t%60;return{hours:s,minutes:a,seconds:c}}function d(e,n){return`${String(e).padStart(2,"0")}${n}`}function K(e){return e.map(({id:n,name:r,image:o,auctionEnd:t,currentBid:s})=>{const{hours:a,minutes:c,seconds:_}=M(t);return`<li class="nft-card__item swiper-slide" data-id="${n}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${o}" alt="" />
            <div class="nft__timer">
              <span>${d(a,"H")}</span>
              <span>${d(c,"m")}</span>
              <span>${d(_,"s")}</span>
            </div>
          </div>

          <h3 class="nft__name">${r}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="${L}#price-icon"></use>
                </svg>

                <span>${s}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`}).join("")}const A=[{id:1,name:"Viktor",username:"@viktor",avatar:i,volume:"8,456",change24h:27.78,floorPrice:"3.5",owners:"2.2K",items:500},{id:2,name:"Cyber Apes",username:"@cyberapes",avatar:i,volume:"7,842",change24h:18.42,floorPrice:"2.8",owners:"1.8K",items:420},{id:3,name:"Meta Punks",username:"@metapunks",avatar:i,volume:"6,921",change24h:12.65,floorPrice:"2.4",owners:"3.1K",items:650},{id:4,name:"Space Girls",username:"@spacegirls",avatar:i,volume:"5,674",change24h:-4.32,floorPrice:"1.9",owners:"1.4K",items:380},{id:5,name:"Crypto Cats",username:"@cryptocats",avatar:i,volume:"4,958",change24h:27.78,floorPrice:"3.5",owners:"2.2K",items:500},{id:6,name:"Digital Souls",username:"@digitalsouls",avatar:i,volume:"4,215",change24h:8.91,floorPrice:"1.7",owners:"1.1K",items:290}],X=document.querySelector(".table"),F=X.querySelector(".table__body");F.insertAdjacentHTML("beforeend",V(A));function V(e){return e.map(({id:n,name:r,username:o,avatar:t,volume:s,change24h:a,floorPrice:c,owners:_,items:C})=>` <tr class="table__body-row" data-id="${n}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${t}" alt="" />
              <div class="table__info">
                <p class="table__name">${r}</p>
                <p class="table__username">${o}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${s}</span>
            </div>
            <span class="table__change ${y(a)}">${w(a)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${y(a)}">${w(a)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${c}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${_}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${C}</span>
          </td>
        </tr>`).join("")}function y(e){return e>0?"table__change--positive":"table__change--negative"}function w(e){return e>0?`+ ${e}`:`- ${Math.abs(e)}`}new x(".swiper",{modules:[P],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}});const v=document.querySelector(".nav__menu-button"),h=document.querySelector(".page"),T=document.querySelector(".mobile-menu");v.addEventListener("click",J);h.addEventListener("click",G);function G(e){e.target.classList.contains("page")&&b()}document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});let S=0;T.addEventListener("touchstart",e=>{S=e.changedTouches[0].screenX});T.addEventListener("touchend",e=>{e.changedTouches[0].screenX-S>80&&b()});function J(){h.classList.add("is-menu-open"),v.classList.add("is-open"),document.body.classList.add("no-scroll")}function b(){h.classList.remove("is-menu-open"),v.classList.remove("is-open"),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=index.js.map
