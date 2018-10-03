/**
 * Модуль для локальных запросов к беку на нашем домене
 * @module HttpLocal
 */
(function () {
    // определяем куда с фронта слать запросы
    var host = "localhost";
    var port = 8070;
    const urlBase = "http://" + host + ":" + port;

    class HttpLocal extends HttpBase {
        constructor() {
            super();
        }

        static get(path, callback) {
            super.get(urlBase + path, callback);
        }

        static post(path, body, callback) {
            super.post(urlBase + path, body, callback)

        }

    }

    window.HttpLocal = HttpLocal; // экспортируем класс

})();
