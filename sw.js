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
	"css/style.css"
]
 
self.addEventListener("install", function (event) {
	self.skipWaiting(); 
	event.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
		return cache.addAll(staticAssets);
		})
  	);
});
 
self.addEventListener("fetch", function (event) {
//   console.log(event.request.url);
 
  event.respondWith(
    // caches.match(event.request)
	// 	.then(function (response) {
	// 		return response || fetch(event.request);
	// 	})
	// fetch(event.request)
	// 	.then(res => {
	// 		console.log(res.status); 
	// 		return res; 
	// 	})
	// 	.catch(err => {
	// 		console.log('Meh ', err); 
	// 	})

	fetch(event.request)
		.catch(function() {
		return caches.match(event.request)
	})

  );
});