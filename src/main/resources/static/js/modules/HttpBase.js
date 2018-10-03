/**
 * позволяет сдделать Http запрос на любой url
 * @module HttpBase
 */
(function () {
    const xhr = new XMLHttpRequest();
    var timeout = 5000;

    class HttpBase {
        constructor() {
        }

        static get(url, callback) {
            xhr.open('GET', url, true);
            xhr.addEventListener("load", callback);
            xhr.timeout = timeout;

            xhr.send();
        }

        static post(url, body, callback) {
            xhr.open('POST', url, true);
            xhr.addEventListener("load", callback);
            xhr.setRequestHeader('Content-Type','application/json; charset=utf8');
            xhr.timeout = timeout;

            xhr.send(JSON.stringify(body));
        }

    }

    window.HttpBase = HttpBase; // экспортируем класс

})();
