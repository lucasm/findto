var CACHE_NAME = 'findto-cache';
var urlsToCache = [
	'index.html',
	'styles/main.css',
	'scripts/parameters.js',
	'scripts/speech.js',
	'scripts/functions.js',
	'scripts/clock.js'
];

self.addEventListener('install', function(event) {
	// perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // cache hit - return response
        if (response) {
				return response;
        }

        // clone the request
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
			function(response) {
				// check if we received a valid response
				if(!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

            // clone the response
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
					.then(function(cache) {
						cache.put(event.request, responseToCache);
					});

            return response;
          }
        );
      })
    );
});