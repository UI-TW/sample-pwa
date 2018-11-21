self.addEventListener('install', function (event) {
  console.log('%c ServiceWorker installation successful', 'color: #FF00ff');
  event.waitUntil(self.skipWaiting())
});

self.addEventListener('activate', event => {
  console.log('%c ServiceWorker activation successful', 'color: #CDDC39');
  event.waitUntil(self.clients.claim())
});
