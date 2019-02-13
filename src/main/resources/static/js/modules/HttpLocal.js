/**
 * Модуль для локальных запросов к беку на нашем домене
 * @module HttpLocal
 */
//(function () {
    // определяем куда с фронта слать запросы
    let host = "localhost";
    let port = 8070;
    const urlBase = "http://" + host + ":" + port;

    //const TOKEN = window.TOKEN;
    import { TOKEN } from '../enums/Token.js';

    // мы пиркрепляем токен
    const AUTHORIZATION_BEARER = "Bearer";
    function createAuthorizationTokenHeader() {
        let token = localStorage.getItem(TOKEN.JWT);
        return AUTHORIZATION_BEARER + " " + token;
    }


import { HttpBase } from './HttpBase.js';

export class HttpLocal extends HttpBase {
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

//    window.HttpLocal = HttpLocal; // экспортируем класс

//})();
