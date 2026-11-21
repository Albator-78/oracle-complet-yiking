const CACHE_NAME = 'oracle-yi-ching-v1';

const APP_FILES = [
  './',
  './index.html',
  './manifest.json',
  './hexagrammes.js',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names =>
        Promise.all(
          names
            .filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (
          response &&
          response.status === 200 &&
          response.type === 'basic'
        ) {
          const copie = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, copie);
          });
        }

        return response;
      })
      .catch(() =>
        caches.match(event.request)
          .then(response => response || caches.match('./index.html'))
      )
  );
});
