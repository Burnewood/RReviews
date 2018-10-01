console.log('Service Worker: Registered');

// create array of files to cache
const cacheFiles = [
  '/',
  '/index.html',
  '/restarant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restarants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];

// listen for install event

self.addEventListener('install',function(e){
  e.waitUntil(
    caches.open('v1').then(function(cache){
      return cache.addAll(cacheFiles);
    })
  );
});
