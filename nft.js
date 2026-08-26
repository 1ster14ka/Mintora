import{a as c,s as d,o as v,r as L,m as $}from"./assets/nft-D_4euyCQ.js";/* empty css                      */import{a as i}from"./assets/vendor-SJA_hCIU.js";import{l as S,a as k}from"./assets/loader-CnGji9US.js";async function H(t){return(await i.get(`https://api.opensea.io/api/v2/collections/${t}`,{headers:{"x-api-key":c}})).data}async function E(t,e,n){const a=await i.get(`https://api.opensea.io/api/v2/chain/${t}/contract/${e}/nfts/${n}`,{headers:{"x-api-key":c}});return console.log(a),a.data.nft}async function y(t){return(await i.get(`https://api.opensea.io/api/v2/accounts/${t}`,{headers:{"x-api-key":c}})).data}async function T(t,e){return(await i.get(`https://api.opensea.io/api/v2/chain/${t}/account/${e}/nfts`,{headers:{"x-api-key":c}})).data}async function N(t,e,n){return(await i.get(`https://api.opensea.io/api/v2/events/chain/${t}/contract/${e}/nfts/${n}`,{headers:{"x-api-key":c},params:{event_type:"sale",limit:20}})).data.asset_events}function q(t){let e='<p class="modal-title">History of Bid</p>';return e+=t.length?t.map(({time:n,payment:a,data:{profile_image_url:s,username:r}})=>`<li>
  <div class="history-purchase">
    <img src="${s}" alt="${r||"user"}" class="history-purchase-img"/>
    <div class="history-purchase-info">
      <p class="history-purchase-username">${r||"Unknown user"}</p>
      <p class="history-purchase-time">${M(n)}</p>
    </div>
    <p class="history-purchase-price"><svg class="nft-card__icon">
                  <use href="${d}#price-icon"></use>
                </svg>${x(a)}</p>
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


`,e}function x(t){return t?`${(Number(t.quantity)/10**t.decimals).toFixed(2)} ${t.symbol}`:"No price"}function M(t){return new Date(t).toLocaleDateString()}const l=new URLSearchParams(window.location.search),p=l.get("chain"),m=l.get("contract"),f=l.get("identifier"),h=document.querySelector(".main__nft-card"),w=document.querySelector(".nft-card--owner"),B=document.querySelector(".nft-content"),o=document.querySelector(".modal"),u=document.querySelector(".modal-list");w.addEventListener("click",v);h.addEventListener("click",C);o.addEventListener("click",P);document.addEventListener("keydown",_);async function C(t){const e=t.target.closest(".place-bid-btn");if(e){e.blur(),D(o),u.innerHTML='<span class="loader"></span>';try{const n=await N(p,m,f),a=await Promise.all(n.map(async s=>{const r=await y(s.buyer);return{time:s.event_timestamp,payment:s.payment,data:r}}));u.innerHTML=q(a)}catch(n){console.log(n),u.innerHTML=`
    <p class="modal-error">
      Failed to load purchase history.
    </p>
  `}}}function P(t){var s;if(t.target===t.currentTarget){g(o);return}const e=t.target.closest(".currency-select");if(e){e.closest(".currency-wrapper").classList.toggle("is-open");return}const n=t.target.closest("[data-currency]");if(n){const r=n.closest(".currency-wrapper"),b=r.querySelector(".currency-select span");b.textContent=n.dataset.currency,r.classList.remove("is-open");return}t.target.closest(".currency-wrapper")||(s=o.querySelector(".currency-wrapper"))==null||s.classList.remove("is-open")}function _(t){t.key==="Escape"&&g(o)}function D(t){t.classList.add("is-open"),document.body.classList.add("modal-open")}function g(t){t.classList.remove("is-open"),document.body.classList.remove("modal-open")}async function A(){try{S();const t=await E(p,m,f),e=await y(t.owners[0].address),n=await H(t.collection),s=(await T(p,e.address)).nfts.map(r=>({...r,chain:p}));h.insertAdjacentHTML("beforeend",L(t,n,e)),w.innerHTML=$(s),B.classList.add("is-loaded")}catch(t){console.log(t)}finally{k()}}A();
//# sourceMappingURL=nft.js.map
