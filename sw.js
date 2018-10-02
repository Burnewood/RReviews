console.log('Service Worker: Registered');

// create array of files to cache
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
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
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches.open('v1').then(function(cache){
      console.log('files cached');
      return cache.addAll(cacheFiles);
    })
  );
});

// listen for fetch event
self.addEventListener('fetch',function(e){
  console.log('Service Worker: Fetching');
  e.respondWith(
    caches.match(e.request).then(function(response){
      if(response){
        console.log('found ',e.request,' in cache');
        return response;
      }
      else{
        console.log('could not find ',e.request,' in cache, fetching...');
        return fetch(e.request)
        .then(function(response){
          const clonedResponse = response.clone();
          caches.open('v1').then(function(cache){
            cache.put(e.request,response);
          })
          return response;
        })
        .catch(function(err){
          console.error(err);
        });
      }
    })
  );
});
