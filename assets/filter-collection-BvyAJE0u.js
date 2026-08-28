import{a as s}from"./vendor-SJA_hCIU.js";import{a as o}from"./data-rSeLe94G.js";async function u(t=null){const a=await s.get("https://api.opensea.io/api/v2/events",{headers:{"x-api-key":o},params:{event_type:"listing",limit:100,...t&&{next:t}}});return{collections:a.data.asset_events.map(e=>({collection:e.asset.collection,chain:e.chain})),nfts:a.data.asset_events.map(e=>({...e.asset,floorPrice:Number(e.payment.quantity)/10**e.payment.decimals,chain:e.chain})).filter(e=>{var n;const i=(n=e==null?void 0:e.image_url)==null?void 0:n.trim();return i?!i.toLowerCase().split("?")[0].endsWith(".mp4"):!1}),next:a.data.next}}function d(t,a){t&&(t.innerHTML=`
    ${r(a)}
    <button data-more="true">Load More</button>
  `,l(t))}function r(t){return t.map(a=>`<button  data-id="${a.collection}"
          data-chain="${a.chain}">${c(a.collection)}</button>`).join("")}function c(t){return t.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}function l(t){t.classList.add("is-open")}function f(t){t.classList.remove("is-open")}export{f as c,u as g,d as r};
//# sourceMappingURL=filter-collection-BvyAJE0u.js.map
