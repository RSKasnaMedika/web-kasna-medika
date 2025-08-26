const CACHE_NAME = "kasna-cache-v1"; // ubah versi tiap update
const urlsToCache = [
  "index.html",
  "style.css",
  "script.js",
  "logokasna.png",
  "rskasna.jpg",
  "fo.jpg"
];

// Install SW
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ambil request
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// Hapus cache lama saat update versi
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});
