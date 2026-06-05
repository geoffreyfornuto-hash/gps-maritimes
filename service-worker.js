const CACHE_NAME = 'gps-maritime-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
  // Ajoute ici tes fichiers CSS ou JS locaux si tu en as séparés
];

// Installation : mise en cache des fichiers
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Interception des requêtes pour fonctionner hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
