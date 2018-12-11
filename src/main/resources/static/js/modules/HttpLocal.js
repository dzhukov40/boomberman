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

    // мы пиркрепляем токен
    const AUTHORIZATION_BEARER = "Bearer";
    function createAuthorizationTokenHeader() {
        var token = localStorage.getItem(TOKEN.JWT);
        return AUTHORIZATION_BEARER + " " + token;
    }

    class HttpLocal extends HttpBase {
        constructor() {
            super();
        }

        static get(path, headers, callback) {
            headers.set(TOKEN.AUTH, createAuthorizationTokenHeader());
            super.get(urlBase + path, headers, callback);
        }

        static post(path, body, headers, callback) {
            headers.set(TOKEN.AUTH, createAuthorizationTokenHeader());
            super.post(urlBase + path, body, headers, callback)
        }

    }

    window.HttpLocal = HttpLocal; // экспортируем класс

})();
