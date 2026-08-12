/* empty css                      */import{S as v,N as y}from"./assets/vendor-BvPe3f8Z.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const _="/Mintora/assets/hero-1-D15dTB8m.jpg",b="/Mintora/assets/hero-2-Cqx6J_gx.jpg",w="/Mintora/assets/hero-1-D15dTB8m.jpg",M="/Mintora/assets/hero-1-D15dTB8m.jpg",E="/Mintora/assets/hero-2-Cqx6J_gx.jpg",S="/Mintora/assets/sprite-D0bXH9w0.svg",r=document.querySelector(".hero__img-wrapper"),a=document.querySelector(".hero__arrow-btn--prev"),l=document.querySelector(".hero__arrow-btn--next"),c=[{id:1,image:_},{id:2,image:b},{id:3,image:w},{id:4,image:M},{id:5,image:E}];let o=0;a.disabled=!0;l.addEventListener("click",x);function x(){a.disabled=!1,o+=1,o+2===c.length&&(l.disabled=!0),r.classList.add("is-changing"),setTimeout(()=>{r.innerHTML=u(c),r.classList.remove("is-changing")},300)}a.addEventListener("click",T);function T(){l.disabled=!1,o-=1,o===0&&(a.disabled=!0),r.classList.add("is-changing"),setTimeout(()=>{r.innerHTML=u(c),r.classList.remove("is-changing")},300)}function u(t){const n=t[o],i=t[o+1];return`<img
            class="hero__img hero__img--left"
            src="${n.image}"
            alt=""
          />
<svg class="hero__arrow">
          <use href="${S}"></use>
        </svg>
          <img
            class="hero__img hero__img--right"
            src="${i.image}"
            alt=""
          />
          `}r.innerHTML=u(c);new v(".swiper",{modules:[y],loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:40,centerInsufficientSlides:!0,navigation:{prevEl:".weekly-slider-prev",nextEl:".weekly-slider-next"}});const m=document.querySelector(".nav__menu-button"),g=document.querySelector(".page"),h=document.querySelector(".mobile-menu");m.addEventListener("click",I);g.addEventListener("click",q);function q(t){t.target.classList.contains("page")&&p()}document.addEventListener("keydown",t=>{t.key==="Escape"&&p()});let L=0;h.addEventListener("touchstart",t=>{L=t.changedTouches[0].screenX});h.addEventListener("touchend",t=>{t.changedTouches[0].screenX-L>80&&p()});function I(){g.classList.add("is-menu-open"),m.classList.add("is-open"),document.body.classList.add("no-scroll")}function p(){g.classList.remove("is-menu-open"),m.classList.remove("is-open"),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=index.js.map
