const CACHE_NAME = 'math-adventure-v1';
const urlsToCache = [
  'index.html',
  'add-select.html',
  'sub-select.html',
  'mult-select.html',
  'game.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});