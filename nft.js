import{a as p}from"./assets/data-rSeLe94G.js";/* empty css                      */import{a as l}from"./assets/vendor-SJA_hCIU.js";import{g as m,a as v}from"./assets/owner-api-DULqRX0-.js";import{s as d,r as L,m as $}from"./assets/nft-card-BXbr5bNh.js";import{o as S}from"./assets/nft-CyXKnPQk.js";import{l as H,a as k}from"./assets/loader-CnGji9US.js";async function E(t){return(await l.get(`https://api.opensea.io/api/v2/collections/${t}`,{headers:{"x-api-key":p}})).data}async function T(t,e,n){const s=await l.get(`https://api.opensea.io/api/v2/chain/${t}/contract/${e}/nfts/${n}`,{headers:{"x-api-key":p}});return console.log(s),s.data.nft}async function N(t,e,n){return(await l.get(`https://api.opensea.io/api/v2/events/chain/${t}/contract/${e}/nfts/${n}`,{headers:{"x-api-key":p},params:{event_type:"sale",limit:20}})).data.asset_events}function q(t){let e='<p class="modal-title">History of Bid</p>';return e+=t.length?t.map(({time:n,payment:s,data:{profile_image_url:r,username:o}})=>`<li>
  <div class="history-purchase">
    <img src="${r}" alt="${o||"user"}" class="history-purchase-img"/>
    <div class="history-purchase-info">
      <p class="history-purchase-username">${o||"Unknown user"}</p>
      <p class="history-purchase-time">${B(n)}</p>
    </div>
    <p class="history-purchase-price"><svg class="nft-card__icon">
                  <use href="${d}#price-icon"></use>
                </svg>${M(s)}</p>
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


`,e}function M(t){return t?`${(Number(t.quantity)/10**t.decimals).toFixed(2)} ${t.symbol}`:"No price"}function B(t){return new Date(t).toLocaleDateString()}const u=new URLSearchParams(window.location.search),c=u.get("chain"),y=u.get("contract"),f=u.get("identifier"),h=document.querySelector(".main__nft-card"),w=document.querySelector(".nft-card--owner"),C=document.querySelector(".nft-content"),a=document.querySelector(".modal"),i=document.querySelector(".modal-list");w.addEventListener("click",S);h.addEventListener("click",P);a.addEventListener("click",_);document.addEventListener("keydown",x);async function P(t){const e=t.target.closest(".place-bid-btn");if(e){e.blur(),D(a),i.innerHTML='<span class="loader"></span>';try{const n=await N(c,y,f),s=await Promise.all(n.map(async r=>{const o=await m(r.buyer);return{time:r.event_timestamp,payment:r.payment,data:o}}));i.innerHTML=q(s)}catch(n){console.log(n),i.innerHTML=`
    <p class="modal-error">
      Failed to load purchase history.
    </p>
  `}}}function _(t){var r;if(t.target===t.currentTarget){g(a);return}const e=t.target.closest(".currency-select");if(e){e.closest(".currency-wrapper").classList.toggle("is-open");return}const n=t.target.closest("[data-currency]");if(n){const o=n.closest(".currency-wrapper"),b=o.querySelector(".currency-select span");b.textContent=n.dataset.currency,o.classList.remove("is-open");return}t.target.closest(".currency-wrapper")||(r=a.querySelector(".currency-wrapper"))==null||r.classList.remove("is-open")}function x(t){t.key==="Escape"&&g(a)}function D(t){t.classList.add("is-open"),document.body.classList.add("modal-open")}function g(t){t.classList.remove("is-open"),document.body.classList.remove("modal-open")}async function A(){try{H();const t=await T(c,y,f),e=await m(t.owners[0].address),n=await E(t.collection),r=(await v(c,e.address)).nfts.map(o=>({...o,chain:c}));h.insertAdjacentHTML("beforeend",L(t,n,e)),w.innerHTML=$(r),C.classList.add("is-loaded")}catch(t){console.log(t)}finally{k()}}A();
//# sourceMappingURL=nft.js.map
