//Main Service Worker file
var cacheName = "res-reviews-001"

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/restaurant.html",
        "/css/styles.css",
        "/js/dbhelper.js",
        "/js/main.js",
        "/js/register.js",
        "/js/restaurant_info.js"
      ]);
    })
  );
});


