import"./assets/mobile-menu-Bg9cRT26.js";/* empty css                      */import{s as l,m as b}from"./assets/nft-card-BXbr5bNh.js";import{l as m,a as y}from"./assets/loader-Dgax0xZa.js";import{a as x}from"./assets/vendor-SJA_hCIU.js";import{a as q}from"./assets/data-Bj2U36bo.js";import{c as w}from"./assets/collections-api-DqygzsAP.js";import{g as C}from"./assets/owner-api-BzvEvSJm.js";function N(t,e,s){return`
  <div class="creator__info-wrapper">
  <div class="creator__info">
  <div class="creator__bg-wrapper">
    <img class="creator__bg" src="${t.banner_image_url}"/>
  </div>
    <img class="creator__img" src="${t.profile_image_url}"/>
    <div class="creator__main-wrapper">
    <div class="creator__left">
      <div class="creator__follow-wrapper">
        <p class="creator__names">
        <span class="creator__name">${t.display_name||"User"}</span>
        <span class="creator__username">@${t.username||"userName"}</span>
        </p>
        <button class="creator__btn creator__btn-follow">Follow +</button>
        <button class="creator__btn creator__btn-unfollow">Unfollow -</button>
      </div>

        <div class="creator__bio-wrapper">
        <div class="creator__bio-subscribes">
        <p class="creator__followers"><span class="creator__followers-count">${t.follower_count}</span><span class="creator__followers-text">Followers</span></p>
        <p class="creator__followers"><span class="creator__followers-count">${t.following_count}</span><span class="creator__followers-text">Followings</span></p>

        </div>
        <div class="creator__bio">
        <p class="creator__bio-subtitle">Bio</p>
        <p class="creatro__bio-text">${t.bio||"Not Bio"}</p>
        </div>

         <ul class="social__list creator__social-list">
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${l}#instagram-icon"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${l}#linkedIn-icon"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${l}#facebook-icon"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="">
                <svg class="social__icons creator__social-icon">
                  <use href="${l}#twitter-icon"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
    </div>
     <div class="creator__lists-wrapper">
        <div class="creator__collection-wrapper">
        <button class="creator__btn-action creator__btn-collection is-open">Collection</button>
        <button class="creator__btn-action creator__btn-activity">Activity</button>

        </div>
        <ul class="creator__collection-list nft-card nft-card--explore is-open">
    ${b(e.collections)}
        </ul>



        <ul class="creator__activity-list">
        ${h(s.asset_events,t.display_name)}
        </ul>
     </div>
   </div>


  </div>

  </div>
  `}function h(t,e){return t.filter(s=>s.nft).map(({chain:s,event_timestamp:u,nft:{display_image_url:c,image_url:i,original_image_url:d,contract:r,collection:f,opensea_url:S,name:A},to_address:D,transfer_type:k})=>`<li class="creator__activity-item">
            <div class="creator__activity-wrapper">
                <div class="creator__activity-info">
                <img class="creator__activity-img" src="${c||i||M(d)}"/>
                <p class="creator__activity-names">
                <span class="creator__activity-name">${A}</span>
                <span class="creator__activity-username">@${e||"Not userName"}</span> <a href="${S}" target="_blank">Open Sea</a></p>
                </div>

                <div class="creator__activity-transfer">
                <p class="creator__activity-type">${k}</p>
                  <p class="creator__activity-date">${H(u)}</p>
                </div>
            </div>
        </li>`).join("")}function M(t){return t?t.startsWith("ipfs://")?t.replace("ipfs://","https://ipfs.io/ipfs/"):t:""}function H(t){return new Date(t*1e3).toLocaleString("en-EN")}async function $(t,e){return(await x.get(`https://api.opensea.io/api/v2/events/accounts/${t}`,{headers:{"x-api-key":q},params:{limit:10,event_type:["sale","transfer","listing","offer"],...e&&{next:e}}})).data}const O=new URLSearchParams(window.location.search),a=O.get("address"),U=document.querySelector(".container-account"),j=document.querySelector(".load-more-trigger"),g=document.querySelector(".loader");let v=!0,o=!1,_=null,p=null,L;async function E(){o=!0,m(g);try{const[t,e,s]=await Promise.all([C(a),w(a),$(a)]);L=t.display_name,_=e.next,p=s.next,U.innerHTML=N(t,e,s);const u=document.querySelector(".creator__collection-wrapper"),c=document.querySelector(".creator__collection-list"),i=document.querySelector(".creator__activity-list");u.addEventListener("click",d=>{const r=[...document.querySelectorAll(".creator__btn-action")],f=d.target.closest(".creator__btn-action");if(f){if(f.classList.contains("creator__btn-collection")){n(r[0],r[1]),n(c,i),v=!0;return}v=!1,n(r[1],r[0]),n(i,c)}})}catch(t){console.log(t)}finally{o=!1,y(g)}}async function F(){if(!_||o)return;const t=document.querySelector(".loader-collection");try{o=!0,m(t);const e=await w(a,_),s=document.querySelector(".creator__collection-list");_=e.next,s.insertAdjacentHTML("beforeend",b(e.collections))}catch(e){console.log(e)}finally{y(t),o=!1}}async function T(){if(!p||o)return;const t=document.querySelector(".loader-collection");try{o=!0,m(t);const e=await $(a,p),s=document.querySelector(".creator__activity-list");p=e.next,s.insertAdjacentHTML("beforeend",h(e.asset_events,L))}catch(e){console.log(e)}finally{y(t),o=!1}}E();function n(t,e){t.classList.add("is-open"),e.classList.remove("is-open")}const B=new IntersectionObserver(t=>{!t[0].isIntersecting||o||(v?F():T())},{rootMargin:"400px"});B.observe(j);
//# sourceMappingURL=account.js.map
