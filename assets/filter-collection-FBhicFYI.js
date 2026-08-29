function a(t,n){t&&(t.innerHTML=`
    ${o(n)}
    <button data-more="true">Load More</button>
  `,i(t))}function o(t){return t.map(n=>`<button  data-id="${n.collection}"
          data-chain="${n.chain}">${e(n.collection)}</button>`).join("")}function e(t){return t.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}function i(t){t.classList.add("is-open")}function r(t){t.classList.remove("is-open")}export{r as c,a as r};
//# sourceMappingURL=filter-collection-FBhicFYI.js.map
