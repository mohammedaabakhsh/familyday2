self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(clients.claim()); });
self.addEventListener('fetch', function(e){
  if(e.request.url.includes('index.html') || e.request.url.endsWith('/')){
    e.respondWith(fetch(e.request, {cache:'no-store'}).catch(function(){ return caches.match(e.request); }));
  }
});
