"use strict";var precacheConfig=[["/clicky-game/index.html","9146270adbfba88958f5febb226f080e"],["/clicky-game/static/css/main.7d35cba4.css","92de60f3e7f02fbb28b0200fd6a485bb"],["/clicky-game/static/js/main.40101061.js","182ed4a8344c1d8c41842785a071df4e"],["/clicky-game/static/media/puppy1.e283471c.jpg","e283471cbec36277c72ae09f1ccce22d"],["/clicky-game/static/media/puppy10.2ff7a7b7.jpg","2ff7a7b72b00f827037d58f66d91276a"],["/clicky-game/static/media/puppy11.4e2dfaa6.jpg","4e2dfaa6b088ced1ffe0faa37938d30c"],["/clicky-game/static/media/puppy12.f9738378.jpg","f9738378ff9d50fc14d6b3b1cc13a89c"],["/clicky-game/static/media/puppy13.d6f27ca2.jpg","d6f27ca2f6d8b4acc9132faffc840dc2"],["/clicky-game/static/media/puppy14.c9e1ba85.jpg","c9e1ba859e4a418f1817e1eaeec08b01"],["/clicky-game/static/media/puppy15.9f62ca31.jpg","9f62ca314501bc94d47f755530f7965e"],["/clicky-game/static/media/puppy2.8eba2bbe.jpg","8eba2bbeacde56f3fdd706a841edfc3f"],["/clicky-game/static/media/puppy3.6ad6fe60.jpg","6ad6fe608b59f673e1ea2bc2d0c46cf5"],["/clicky-game/static/media/puppy5.f10a7464.jpg","f10a74644efff5ffe5edc1e602f54997"],["/clicky-game/static/media/puppy6.388a4f95.jpg","388a4f95be96777dd2b9badbe25ff032"],["/clicky-game/static/media/puppy7.385a4b87.jpg","385a4b87a63048dbbf52480a68d820ff"],["/clicky-game/static/media/puppy9.7161f1ae.jpg","7161f1ae81f4b2540a6acf90fea0e40d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/clicky-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});