/*
Clase 23

Service Workers

Sirven para hacer que nuestras aplicaciones funcionen Offline.

Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.
*/

// si se cae el internet deberia funcionar sin problema 
// lo cual no esta pasando en estos momentos

const VERSION = "v1";

self.addEventListener('install', event => {
     event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (!request.method === "GET") {
        return;
    }

    // Buscar en cache
    event.respondWith(cachedResponse(request))

    // Actualizar cache
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/mediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/img/educar-sobre-bullying.mp4',

    ])
}

function cachedResponse(request) {
    const cache = await caches.open(VERSION); 
    const response = await cache.match(request)
    return response || fetch(request); 
}

function updateCache(request) {
    const cache = await caches.open(VERSION); 
    const response =await fetch(request);
    return cache.put(request, response);
}