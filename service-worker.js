"use strict";var precacheConfig=[["/clicky/index.html","475ff25f8a7ba6f0893592ead1f294d1"],["/clicky/static/css/main.7d35cba4.css","92de60f3e7f02fbb28b0200fd6a485bb"],["/clicky/static/js/main.cd523302.js","3d58f8864d4d1163cd36101c2aea6bf9"],["/clicky/static/media/puppy1.e283471c.jpg","e283471cbec36277c72ae09f1ccce22d"],["/clicky/static/media/puppy10.2ff7a7b7.jpg","2ff7a7b72b00f827037d58f66d91276a"],["/clicky/static/media/puppy11.4e2dfaa6.jpg","4e2dfaa6b088ced1ffe0faa37938d30c"],["/clicky/static/media/puppy12.f9738378.jpg","f9738378ff9d50fc14d6b3b1cc13a89c"],["/clicky/static/media/puppy13.d6f27ca2.jpg","d6f27ca2f6d8b4acc9132faffc840dc2"],["/clicky/static/media/puppy14.c9e1ba85.jpg","c9e1ba859e4a418f1817e1eaeec08b01"],["/clicky/static/media/puppy15.9f62ca31.jpg","9f62ca314501bc94d47f755530f7965e"],["/clicky/static/media/puppy2.8eba2bbe.jpg","8eba2bbeacde56f3fdd706a841edfc3f"],["/clicky/static/media/puppy3.6ad6fe60.jpg","6ad6fe608b59f673e1ea2bc2d0c46cf5"],["/clicky/static/media/puppy5.f10a7464.jpg","f10a74644efff5ffe5edc1e602f54997"],["/clicky/static/media/puppy6.388a4f95.jpg","388a4f95be96777dd2b9badbe25ff032"],["/clicky/static/media/puppy7.385a4b87.jpg","385a4b87a63048dbbf52480a68d820ff"],["/clicky/static/media/puppy9.7161f1ae.jpg","7161f1ae81f4b2540a6acf90fea0e40d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/clicky/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});