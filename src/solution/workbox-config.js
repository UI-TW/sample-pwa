module.exports = {
  "importWorkboxFrom": "local",
  "skipWaiting": true,
  "clientsClaim": true,
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{js,woff2,png,ico,svg,html,css}"
  ],
  "swDest": "dist/sw.js",
  "runtimeCaching": [{
    // Match any same-origin request that contains 'api'.
    "urlPattern": /.*\/api\/search*/,
    "handler": "networkFirst",
    "options": {
      // Fall back to the cache after 10 seconds.
      "networkTimeoutSeconds": 10,
      "cacheName": 'my-api-cache',
      // Configure custom cache expiration.
      "expiration": {
        "maxEntries": 5,
        "maxAgeSeconds": 60,
      },
      "cacheableResponse": {
        "statuses": [0, 200]
      }
    }
  }]
};
