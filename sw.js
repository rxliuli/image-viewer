if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>s(e,o),c={module:{uri:o},exports:t,require:l};i[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.47436ce7.css",revision:null},{url:"assets/index.5071b112.js",revision:null},{url:"index.html",revision:"602fe775fe709b423df6583c5553cdbe"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/logo512x512.png",revision:"b58856d095a60b572826534b07e1b720"},{url:"icons/logo.svg",revision:"c4e258ef106ff41411d33961327877ca"},{url:"manifest.webmanifest",revision:"be0aeaa3f5a23824c6d1d365e5afc835"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
