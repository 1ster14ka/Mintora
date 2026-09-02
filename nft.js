import"./assets/mobile-menu-Bg9cRT26.js";/* empty css                      */import{a as p}from"./assets/vendor-SJA_hCIU.js";import{a as l}from"./assets/data-Bj2U36bo.js";import{g as y,a as L}from"./assets/owner-api-BzvEvSJm.js";import{s as d,r as $,m as S}from"./assets/nft-card-BXbr5bNh.js";import{o as E}from"./assets/nft-CyXKnPQk.js";import{l as H,a as k}from"./assets/loader-Dgax0xZa.js";async function T(t){return(await p.get(`https://api.opensea.io/api/v2/collections/${t}`,{headers:{"x-api-key":l}})).data}async function q(t,e,n){const s=await p.get(`https://api.opensea.io/api/v2/chain/${t}/contract/${e}/nfts/${n}`,{headers:{"x-api-key":l}});return console.log(s),s.data.nft}async function N(t,e,n){return(await p.get(`https://api.opensea.io/api/v2/events/chain/${t}/contract/${e}/nfts/${n}`,{headers:{"x-api-key":l},params:{event_type:"sale",limit:20}})).data.asset_events}function M(t){let e='<p class="modal-title">History of Bid</p>';return e+=t.length?t.map(({time:n,payment:s,data:{profile_image_url:r,username:o}})=>`<li>
  <div class="history-purchase">
    <img src="${r}" alt="${o||"user"}" class="history-purchase-img"/>
    <div class="history-purchase-info">
      <p class="history-purchase-username">${o||"Unknown user"}</p>
      <p class="history-purchase-time">${C(n)}</p>
    </div>
    <p class="history-purchase-price"><svg class="nft-card__icon">
                  <use href="${d}#price-icon"></use>
                </svg>${B(s)}</p>
    </div>
  </li>`).join(""):'<p class="history-empty">No purchase history</p>',e+=`<p>Your Bid</p>
 <div class="bid-input">
  <div class="currency-wrapper">
    <button class="currency-select" type="button">
      <span>ETH</span>

      <svg >
        <use href="${d}#open-currency" ></use>
      </svg>
    </button>
    <div class="currency-dropdown">
    <button type="button" data-currency="ETH">ETH</button>
    <button type="button" data-currency="WETH">WETH</button>
    <button type="button" data-currency="USDC">USDC</button>
  </div>
  </div>

  <input
    type="number"
    name="value"
    placeholder="0.00"
    min="0"
    step="any"
  />
</div>
  <button class="submit-btn-modal">Submit</button>


`,e}function B(t){return t?`${(Number(t.quantity)/10**t.decimals).toFixed(2)} ${t.symbol}`:"No price"}function C(t){return new Date(t).toLocaleDateString()}const u=new URLSearchParams(window.location.search),c=u.get("chain"),f=u.get("contract"),h=u.get("identifier"),w=document.querySelector(".main__nft-card"),g=document.querySelector(".nft-card--owner"),P=document.querySelector(".nft-content"),a=document.querySelector(".modal"),i=document.querySelector(".modal-list"),m=document.querySelector(".loader");g.addEventListener("click",E);w.addEventListener("click",_);a.addEventListener("click",x);document.addEventListener("keydown",D);async function _(t){const e=t.target.closest(".place-bid-btn");if(e){e.blur(),A(a),i.innerHTML='<span class="loader"></span>';try{const n=await N(c,f,h),s=await Promise.all(n.map(async r=>{const o=await y(r.buyer);return{time:r.event_timestamp,payment:r.payment,data:o}}));i.innerHTML=M(s)}catch(n){console.log(n),i.innerHTML=`
    <p class="modal-error">
      Failed to load purchase history.
    </p>
  `}}}function x(t){var r;if(t.target===t.currentTarget){b(a);return}const e=t.target.closest(".currency-select");if(e){e.closest(".currency-wrapper").classList.toggle("is-open");return}const n=t.target.closest("[data-currency]");if(n){const o=n.closest(".currency-wrapper"),v=o.querySelector(".currency-select span");v.textContent=n.dataset.currency,o.classList.remove("is-open");return}t.target.closest(".currency-wrapper")||(r=a.querySelector(".currency-wrapper"))==null||r.classList.remove("is-open")}function D(t){t.key==="Escape"&&b(a)}function A(t){t.classList.add("is-open"),document.body.classList.add("modal-open")}function b(t){t.classList.remove("is-open"),document.body.classList.remove("modal-open")}async function I(){try{H(m);const t=await q(c,f,h),e=await y(t.owners[0].address),n=await T(t.collection),r=(await L(c,e.address)).nfts.map(o=>({...o,chain:c}));w.insertAdjacentHTML("beforeend",$(t,n,e)),g.innerHTML=S(r),P.classList.add("is-loaded")}catch(t){console.log(t)}finally{k(m)}}I();
//# sourceMappingURL=nft.js.map
