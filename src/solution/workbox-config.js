module.exports = {
  "importWorkboxFrom": "local",
  "skipWaiting": true,
  "clientsClaim": true,
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{js,woff2,png,ico,svg,html,css}"
  ],
  "swDest": "dist/sw.js"
};
