let staticCacheName = "pwa";
let staticAssets = [
	"/", 
	"manifest.json", 
	"js/app.js", 
	"js/materialize.js", 
	"js/User.js", 
	"js/Weight.js", 
	"css/materialize.css", 
	"css/style.css"
]
 
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(staticAssets);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request)
		.then(function (response) {
			return response || fetch(event.request);
		})
  );
});