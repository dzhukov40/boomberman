/**
 * Модуль для локальных запросов к беку на нашем домене
 * @module HttpLocal
 */
(function () {
    // определяем куда с фронта слать запросы
    var host = "localhost";
    var port = 8070;
    const urlBase = "http://" + host + ":" + port;

    const TOKEN = window.TOKEN;

    class HttpLocal extends HttpBase {
        constructor() {
            super();
        }

        static get(path, callback) {
            let headers = new Map();
            headers
                .set(TOKEN.JWT, localStorage.getItem(TOKEN.JWT));

            super.get(urlBase + path, headers, callback);
        }

        static post(path, body, callback) {
            let headers = new Map();
            headers
                .set('Content-Type','application/json; charset=utf8')
                .set(TOKEN.JWT, localStorage.getItem(TOKEN.JWT));

            super.post(urlBase + path, body, headers, callback)
        }

    }

    window.HttpLocal = HttpLocal; // экспортируем класс

})();
