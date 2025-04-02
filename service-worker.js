self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('calculadora-v1').then((cache) => {
        return cache.addAll([
          'index.html',
          'manifest.json',
          'icon.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((respuesta) => {
        return respuesta || fetch(e.request);
      })
    );
  });
  