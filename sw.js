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
        "/js/restaurant_info.js",
        "/data/restaurants.json",
        "/sw.js",
        "/restaurant.html?id=1",
        "/restaurant.html?id=2",
        "/restaurant.html?id=3",
        "/restaurant.html?id=4",
        "/restaurant.html?id=5",
        "/restaurant.html?id=6",
        "/restaurant.html?id=7",
        "/restaurant.html?id=8",
        "/restaurant.html?id=9",
        "/restaurant.html?id=10"
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});

