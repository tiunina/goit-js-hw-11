import{i as n,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=r=>`
  <li class="gallery-card">
    <a class="gallery-a" href="${r.largeImageURL}">
       <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}"  />
    </a>

<ul class="img-description-list">
  <li class="img-description-el">
  <p>Likes</p>
  <p>${r.likes}</p></li>
  <li class="img-description-el">
  <p>Views</p>
  <p>${r.views}</p></li>
  <li class="img-description-el">
  <p>Comments</p>
  <p>${r.comments}</p></li>
  <li class="img-description-el">
  <p>Downloads</p>
  <p>${r.downloads}</p></li>
</ul>

  </li>

  
`,p="https://pixabay.com/api/",m=r=>{const s=new URLSearchParams({key:"45491885-d594c4380fd68d18bb383d8af",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},a=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),h=r=>{r.preventDefault();const s=document.querySelector(".loader");s.classList.remove("is-hidden");const o=a.elements.user_query.value;o.trim()&&m(o).then(i=>{if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}const e=i.hits.map(t=>d(t)).join("");s.classList.add("is-hidden"),c.innerHTML=e,new u(".js-gallery a",{captionsData:"alt",captionDelay:250}),a.reset()}).catch(i=>{console.log(i)})};a.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
