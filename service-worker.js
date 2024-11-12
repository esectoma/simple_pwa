// Simple Service Worker for offline caching
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("simple-pwa-cache").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/home.html",
        "/manifest.json",
        "/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
    