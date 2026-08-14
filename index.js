/* empty css                      */import{S as A,N as $}from"./assets/vendor-BvPe3f8Z.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const D="/Mintora/assets/hero-1-D15dTB8m.jpg",N="/Mintora/assets/hero-2-Cqx6J_gx.jpg",q="/Mintora/assets/hero-1-D15dTB8m.jpg",I="/Mintora/assets/hero-1-D15dTB8m.jpg",F="/Mintora/assets/hero-2-Cqx6J_gx.jpg",P="/Mintora/assets/sprite-D0bXH9w0.svg",l=document.querySelector(".hero__img-wrapper"),p=document.querySelector(".hero__arrow-btn--prev"),f=document.querySelector(".hero__arrow-btn--next"),g=[{id:1,image:D},{id:2,image:N},{id:3,image:q},{id:4,image:I},{id:5,image:F}];let m=0;p.disabled=!0;f.addEventListener("click",H);function H(){p.disabled=!1,m+=1,m+2===g.length&&(f.disabled=!0),l.classList.add("is-changing"),setTimeout(()=>{l.innerHTML=_(g),l.classList.remove("is-changing")},300)}p.addEventListener("click",j);function j(){f.disabled=!1,m-=1,m===0&&(p.disabled=!0),l.classList.add("is-changing"),setTimeout(()=>{l.innerHTML=_(g),l.classList.remove("is-changing")},300)}function _(t){const a=t[m],s=t[m+1];return`<img
            class="hero__img hero__img--left"
            src="${a.image}"
            alt=""
          />
<svg class="hero__arrow">
          <use href="${P}#arrow"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${s.image}"
            alt=""
          />
          `}l.innerHTML=_(g);function W(t){const a=new Date,o=new Date(t)-a;if(o<=0)return{hours:0,minutes:0,seconds:0};const i=Math.floor(o/1e3),n=Math.floor(i/3600),r=Math.floor(i%3600/60),d=i%60;return{hours:n,minutes:r,seconds:d}}function B(t,a){setInterval(()=>{t.forEach(s=>{const o=a.find(({id:y})=>y===Number(s.dataset.id)),{hours:i,minutes:n,seconds:r}=W(o.auctionEnd),c=s.querySelector(".nft__timer").querySelectorAll("span");c[0].textContent=u(i,"H"),c[1].textContent=u(n,"m"),c[2].textContent=u(r,"s")})},1e3)}function u(t,a){return`${String(t).padStart(2,"0")}${a}`}function w(t){return t.map(({id:a,name:s,image:o,auctionEnd:i,currentBid:n})=>{const{hours:r,minutes:d,seconds:c}=W(i);return`<li class="nft-card__item swiper-slide" data-id="${a}">
          <div class="nft__img-wrapper">
            <img class="nft__img" src="${o}" alt="" />
            <div class="nft__timer">
              <span>${u(r,"H")}</span>
              <span>${u(d,"m")}</span>
              <span>${u(c,"s")}</span>
            </div>
          </div>

          <h3 class="nft__name">${s}</h3>
          <div class="nft-card__bid">
            <div class="nft-card__bid-wrapper">
              <span class="nft-card__label"> Current bid </span>

              <div class="nft-card__price">
                <svg class="nft-card__icon">
                  <use href="${P}#price-icon"></use>
                </svg>

                <span>${n}</span>
              </div>
            </div>
            <button class="nft-card__button">PLACE BID</button>
          </div>
        </li>`}).join("")}const e="/Mintora/assets/hero-1-D15dTB8m.jpg",b=[{id:1,name:"Viktor",image:e,category:"Art",collection:"Viktor Collection",auctionEnd:"2026-08-16T19:04:00",currentBid:"1.25",isWeekly:!0},{id:2,name:"Cyber Ape",image:e,category:"PFP",collection:"Cyber Apes",auctionEnd:"2026-08-16T12:45:00",currentBid:"2.40",isWeekly:!0},{id:3,name:"Meta Punk",image:e,category:"PFP",collection:"Meta Punks",auctionEnd:"2026-08-14T21:20:00",currentBid:"0.85",isWeekly:!0},{id:4,name:"Space Girl",image:e,category:"Art",collection:"Space Girls",auctionEnd:"2026-08-17T18:10:00",currentBid:"3.10",isWeekly:!0},{id:5,name:"Crypto Cat",image:e,category:"Animals",collection:"Crypto Cats",auctionEnd:"2026-08-15T09:30:00",currentBid:"1.75",isWeekly:!0},{id:6,name:"Digital Soul",image:e,category:"Art",collection:"Digital Souls",auctionEnd:"2026-08-18T14:00:00",currentBid:"4.20",isWeekly:!0},{id:7,name:"Neon Monkey",image:e,category:"PFP",collection:"Neon Monkeys",auctionEnd:"2026-08-16T20:15:00",currentBid:"2.90",isWeekly:!0},{id:8,name:"Future Face",image:e,category:"Photography",collection:"Future Faces",auctionEnd:"2026-08-19T11:45:00",currentBid:"1.05",isWeekly:!0},{id:9,name:"Golden Skull",image:e,category:"Art",collection:"Golden Skulls",auctionEnd:"2026-08-20T16:30:00",currentBid:"2.15",isWeekly:!1},{id:10,name:"Cyber Warrior",image:e,category:"PFP",collection:"Cyber Warriors",auctionEnd:"2026-08-21T13:20:00",currentBid:"3.45",isWeekly:!1},{id:11,name:"Dream Landscape",image:e,category:"Photography",collection:"Dreamscapes",auctionEnd:"2026-08-22T18:45:00",currentBid:"1.80",isWeekly:!1},{id:12,name:"Pixel Hero",image:e,category:"Pixel Art",collection:"Pixel Heroes",auctionEnd:"2026-08-20T22:15:00",currentBid:"0.95",isWeekly:!1},{id:13,name:"Moon Walker",image:e,category:"Art",collection:"Moon Walkers",auctionEnd:"2026-08-23T11:30:00",currentBid:"2.65",isWeekly:!1},{id:14,name:"Crypto Dragon",image:e,category:"Animals",collection:"Crypto Dragons",auctionEnd:"2026-08-24T15:10:00",currentBid:"5.20",isWeekly:!1},{id:15,name:"Robot Mind",image:e,category:"AI",collection:"Robot Minds",auctionEnd:"2026-08-21T19:40:00",currentBid:"1.35",isWeekly:!1},{id:16,name:"Neon City",image:e,category:"Photography",collection:"Neon Cities",auctionEnd:"2026-08-25T12:00:00",currentBid:"2.75",isWeekly:!1},{id:17,name:"Pixel Cat",image:e,category:"Pixel Art",collection:"Pixel Animals",auctionEnd:"2026-08-22T17:20:00",currentBid:"0.65",isWeekly:!1},{id:18,name:"Galaxy Girl",image:e,category:"Art",collection:"Galaxy Girls",auctionEnd:"2026-08-26T14:50:00",currentBid:"3.85",isWeekly:!1},{id:19,name:"Digital Tiger",image:e,category:"Animals",collection:"Digital Beasts",auctionEnd:"2026-08-23T20:30:00",currentBid:"2.25",isWeekly:!1},{id:20,name:"Virtual World",image:e,category:"Metaverse",collection:"Virtual Worlds",auctionEnd:"2026-08-27T10:45:00",currentBid:"4.60",isWeekly:!1},{id:21,name:"Cyber Samurai",image:e,category:"PFP",collection:"Cyber Warriors",auctionEnd:"2026-08-28T16:15:00",currentBid:"3.75",isWeekly:!1},{id:22,name:"Abstract Mind",image:e,category:"Abstract",collection:"Abstract Minds",auctionEnd:"2026-08-29T13:40:00",currentBid:"1.90",isWeekly:!1},{id:23,name:"Rainbow World",image:e,category:"Art",collection:"Rainbow Worlds",auctionEnd:"2026-08-30T18:00:00",currentBid:"2.35",isWeekly:!1},{id:24,name:"Pixel Warrior",image:e,category:"Pixel Art",collection:"Pixel Heroes",auctionEnd:"2026-08-31T21:10:00",currentBid:"1.15",isWeekly:!1},{id:25,name:"Space Explorer",image:e,category:"Metaverse",collection:"Space Explorers",auctionEnd:"2026-09-01T12:25:00",currentBid:"3.60",isWeekly:!1},{id:26,name:"Electric Soul",image:e,category:"AI",collection:"Digital Souls",auctionEnd:"2026-09-02T17:45:00",currentBid:"2.80",isWeekly:!1},{id:27,name:"Blue Planet",image:e,category:"Photography",collection:"Blue Planet",auctionEnd:"2026-09-03T19:30:00",currentBid:"1.55",isWeekly:!1},{id:28,name:"Golden Ape",image:e,category:"PFP",collection:"Cyber Apes",auctionEnd:"2026-09-04T14:15:00",currentBid:"4.10",isWeekly:!1},{id:29,name:"Digital Flower",image:e,category:"Art",collection:"Digital Nature",auctionEnd:"2026-09-05T11:00:00",currentBid:"0.90",isWeekly:!1},{id:30,name:"Future Robot",image:e,category:"AI",collection:"Robot Minds",auctionEnd:"2026-09-06T20:20:00",currentBid:"3.25",isWeekly:!1}],M=b.filter(t=>t.isWeekly),S=document.querySelector(".nft-card--weekly");S.innerHTML=w(M);const G=[...S.children];B(G,M);const O=[{id:1,name:"Viktor",username:"@viktor",avatar:e,volume:"8,456",change24h:27.78,floorPrice:"3.5",owners:"2.2K",items:500},{id:2,name:"Cyber Apes",username:"@cyberapes",avatar:e,volume:"7,842",change24h:18.42,floorPrice:"2.8",owners:"1.8K",items:420},{id:3,name:"Meta Punks",username:"@metapunks",avatar:e,volume:"6,921",change24h:12.65,floorPrice:"2.4",owners:"3.1K",items:650},{id:4,name:"Space Girls",username:"@spacegirls",avatar:e,volume:"5,674",change24h:-4.32,floorPrice:"1.9",owners:"1.4K",items:380},{id:5,name:"Crypto Cats",username:"@cryptocats",avatar:e,volume:"4,958",change24h:27.78,floorPrice:"3.5",owners:"2.2K",items:500},{id:6,name:"Digital Souls",username:"@digitalsouls",avatar:e,volume:"4,215",change24h:8.91,floorPrice:"1.7",owners:"1.1K",items:290}],K=document.querySelector(".table"),R=K.querySelector(".table__body");R.insertAdjacentHTML("beforeend",V(O));function V(t){return t.map(({id:a,name:s,username:o,avatar:i,volume:n,change24h:r,floorPrice:d,owners:c,items:y})=>` <tr class="table__body-row" data-id="${a}">
          <td class="table__collection table__collection-visible">
            <div class="table__profile">
              <img class="table__avatar" src="${i}" alt="" />
              <div class="table__info">
                <p class="table__name">${s}</p>
                <p class="table__username">${o}</p>
              </div>
            </div>
          </td>
          <td class="table__collection table__collection-visible">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${n}</span>
            </div>
            <span class="table__change ${E(r)}">${T(r)}%</span>
          </td>
          <td class="table__collection">
            <span class="table__change ${E(r)}">${T(r)}%</span>
          </td>
          <td class="table__collection">
            <div class="table__price-wrapper">
              <svg class="table__icon">
                <use href="./img/sprite.svg#price-icon"></use>
              </svg>
              <span class="table__price">${d}</span>
            </div>
          </td>
          <td class="table__collection">
            <span class="table__text table__owners">${c}</span>
          </td>
          <td class="table__collection">
            <span class="table__text table__items">${y}</span>
          </td>
        </tr>`).join("")}function E(t){return t>0?"table__change--positive":"table__change--negative"}function T(t){return t>0?`+ ${t}`:`- ${Math.abs(t)}`}const C=document.querySelector(".nft-card--explore"),X=b.slice(0,8);C.innerHTML=w(X);const J=[...C.children];B(J,b);new A(".swiper",{modules:[$],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}});const h=document.querySelector(".nav__menu-button"),v=document.querySelector(".page"),x=document.querySelector(".mobile-menu");h.addEventListener("click",Q);v.addEventListener("click",z);function z(t){t.target.classList.contains("page")&&k()}document.addEventListener("keydown",t=>{t.key==="Escape"&&k()});let L=0;x.addEventListener("touchstart",t=>{L=t.changedTouches[0].screenX});x.addEventListener("touchend",t=>{t.changedTouches[0].screenX-L>80&&k()});function Q(){v.classList.add("is-menu-open"),h.classList.add("is-open"),document.body.classList.add("no-scroll")}function k(){v.classList.remove("is-menu-open"),h.classList.remove("is-open"),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=index.js.map
