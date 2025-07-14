// sw.js - simple service worker
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Just do a simple fetch, no caching for this basic example
  event.respondWith(fetch(event.request));
});
