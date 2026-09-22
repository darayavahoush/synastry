try{importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js")}catch(e){}
const C="syn-v10",F=["./","./index.html","./data.js","./manifest.webmanifest","./icon.png","./icon-192.png","./push-banner.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F)).catch(()=>{}))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||/onesignal\.com/.test(e.request.url))return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp).catch(()=>{}));return res;
  }).catch(()=>e.request.mode==="navigate"?caches.match("./index.html"):undefined)));
});
