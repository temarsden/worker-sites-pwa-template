console.log("This is service worker talking...");
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/img/200-wrangler-ferris.gif',
    '/img/404-wrangler-ferris.gif',
    '/img/icon-192x192.png',
    '/img/icon-512x512.png',
    '/404.html',
    '/favicon.ico',
    '/index.html',
    '/manifest.json',
    '/serviceworker.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});