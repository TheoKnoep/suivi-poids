/*
Last update : 2022-01-19 23:02
*/
let staticCacheName = "pwa";
let staticAssets = [
	"/", 
	"manifest.json", 
	"js/app.js", 
	"js/materialize.js", 
	"js/User.js", 
	"js/Weight.js", 
	"css/materialize.css", 
	"css/style.css", 
	"assets/ico-suivi-poids.png",
	"assets/icon_48x48.png",
	"assets/icon_72x72.png",
	"assets/icon_96x96.png",
	"assets/icon_144x144.png",
	"assets/icon_168x168.png",
	"assets/icon_192x192.png"
]
 
self.addEventListener("install", function (event) {
	self.skipWaiting(); 
	event.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
		return cache.addAll(staticAssets);
		})
  	);
});
 
self.addEventListener('fetch', (e) => {
	e.respondWith(
		fetch(e.request)
			.then(async res => {
				console.log(res.ok); 
				const cache = await caches.open(staticCacheName); 
				console.log('[SW] caching new ressource ' + e.request.url); 
				cache.put(e.request, res.clone());
				return res; 
			})
			.catch(err => {
				console.log('Catch error : ', err); 
				return caches.match(e.request); 
			})
	);
});
