/* empty css                      */import{S as M,N as S}from"./assets/vendor-BvPe3f8Z.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const x="/Mintora/assets/hero-1-D15dTB8m.jpg",B="/Mintora/assets/hero-2-Cqx6J_gx.jpg",q="/Mintora/assets/hero-1-D15dTB8m.jpg",C="/Mintora/assets/hero-1-D15dTB8m.jpg",N="/Mintora/assets/hero-2-Cqx6J_gx.jpg",$="/Mintora/assets/sprite-D0bXH9w0.svg",a=document.querySelector(".hero__img-wrapper"),g=document.querySelector(".hero__arrow-btn--prev"),p=document.querySelector(".hero__arrow-btn--next"),m=[{id:1,image:x},{id:2,image:B},{id:3,image:q},{id:4,image:C},{id:5,image:N}];let u=0;g.disabled=!0;p.addEventListener("click",D);function D(){g.disabled=!1,u+=1,u+2===m.length&&(p.disabled=!0),a.classList.add("is-changing"),setTimeout(()=>{a.innerHTML=f(m),a.classList.remove("is-changing")},300)}g.addEventListener("click",I);function I(){p.disabled=!1,u-=1,u===0&&(g.disabled=!0),a.classList.add("is-changing"),setTimeout(()=>{a.innerHTML=f(m),a.classList.remove("is-changing")},300)}function f(t){const s=t[u],i=t[u+1];return`<img
            class="hero__img hero__img--left"
            src="${s.image}"
            alt=""
          />
<svg class="hero__arrow">
          <use href="${$}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${i.image}"
            alt=""
          />
          `}a.innerHTML=f(m);const c="/Mintora/assets/hero-1-D15dTB8m.jpg",y=[{id:1,name:"Viktor",image:c,auctionEnd:"2026-08-16T19:04:00",currentBid:"1.25"},{id:2,name:"Cyber Ape",image:c,auctionEnd:"2026-08-16T12:45:00",currentBid:"2.40"},{id:3,name:"Meta Punk",image:c,auctionEnd:"2026-08-14T21:20:00",currentBid:"0.85"},{id:4,name:"Space Girl",image:c,auctionEnd:"2026-08-17T18:10:00",currentBid:"3.10"},{id:5,name:"Crypto Cat",image:c,auctionEnd:"2026-08-15T09:30:00",currentBid:"1.75"},{id:6,name:"Digital Soul",image:c,auctionEnd:"2026-08-18T14:00:00",currentBid:"4.20"},{id:7,name:"Neon Monkey",image:c,auctionEnd:"2026-08-16T20:15:00",currentBid:"2.90"},{id:8,name:"Future Face",image:c,auctionEnd:"2026-08-19T11:45:00",currentBid:"1.05"}],b=document.querySelector(".nft-card--weekly");b.innerHTML=j(y);const k=[...b.children];function P(){setInterval(()=>{k.forEach(t=>{const s=y.find(({id:l})=>l===Number(t.dataset.id)),{hours:i,minutes:o,seconds:e}=L(s.auctionEnd),r=t.querySelector(".nft__timer").querySelectorAll("span");r[0].textContent=d(i,"H"),r[1].textContent=d(o,"m"),r[2].textContent=d(e,"s")})},1e3)}P();function L(t){const s=new Date,o=new Date(t)-s;if(o<=0)return{hours:0,minutes:0,seconds:0};const e=Math.floor(o/1e3),n=Math.floor(e/3600),r=Math.floor(e%3600/60),l=e%60;return{hours:n,minutes:r,seconds:l}}function d(t,s){return`${String(t).padStart(2,"0")}${s}`}function j(t){return t.map(({id:s,name:i,image:o,auctionEnd:e,currentBid:n})=>{const{hours:r,minutes:l,seconds:T}=L(e);return`<li class="nft-card__item swiper-slide" data-id="${s}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${o}" alt="" />
            <div class="nft__timer">
              <span>${d(r,"H")}</span>
              <span>${d(l,"m")}</span>
              <span>${d(T,"s")}</span>
            </div>
          </div>

          <h3 class="nft__name">${i}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="./img/sprite.svg#price-icon"></use>
                </svg>

                <span>${n}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`}).join("")}new M(".swiper",{modules:[S],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}});const h=document.querySelector(".nav__menu-button"),_=document.querySelector(".page"),w=document.querySelector(".mobile-menu");h.addEventListener("click",O);_.addEventListener("click",H);function H(t){t.target.classList.contains("page")&&v()}document.addEventListener("keydown",t=>{t.key==="Escape"&&v()});let E=0;w.addEventListener("touchstart",t=>{E=t.changedTouches[0].screenX});w.addEventListener("touchend",t=>{t.changedTouches[0].screenX-E>80&&v()});function O(){_.classList.add("is-menu-open"),h.classList.add("is-open"),document.body.classList.add("no-scroll")}function v(){_.classList.remove("is-menu-open"),h.classList.remove("is-open"),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=index.js.map
