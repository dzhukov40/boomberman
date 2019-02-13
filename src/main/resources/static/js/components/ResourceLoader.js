/**
 *
 * @module ResourceLoader
 */
// (function () {
    "use strict";

    var resourceCache = {};
    var readyCallbacks = [];


    function loadOneResource(url) {
        if(resourceCache[url]) {
            return resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;

                if(ResourceLoader.isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }


export class ResourceLoader {
        constructor() {}

        static load(urlOrArrayOfUrls) {
            if(urlOrArrayOfUrls instanceof Array) {
                urlOrArrayOfUrls.forEach(function(url) {
                    loadOneResource(url);
                });
            }
            else {
                loadOneResource(urlOrArrayOfUrls);
            }
        }

        static get(url) {
            return resourceCache[url];
        }

        static isReady() {
            var ready = true;
            for(var k in resourceCache) {
                if(resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
                    ready = false;
                }
            }
            return ready;
        }

        static onReady(func) {
            readyCallbacks.push(func);
        }


    }


//     window.ResourceLoader = ResourceLoader; // экспортируем класс

// })();
