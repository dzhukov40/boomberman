/**
 * Модуль для работы с юзером
 */
(function () {
    "use strict";

    var HttpLocal = window.HttpLocal;
    const TOKEN = window.TOKEN;

    const AUTHORIZATION_SERVICE_PATH = '/authorization';
    const LOG_IN = AUTHORIZATION_SERVICE_PATH + '/logIn';
    const REGISTRATION = AUTHORIZATION_SERVICE_PATH + '/registration';
    const LOG_OUT = AUTHORIZATION_SERVICE_PATH + '/logOut';
    const IS_LOG_IN = AUTHORIZATION_SERVICE_PATH + '/isLogIn';


    function checklogIn(response) {
        var response = JSON.parse(response.responseText);
        var header = response.header;
        var body = response.body;

        if (header === TOKEN.JWT) {
            localStorage.setItem(TOKEN.JWT, body);
        }
        console.log(header);
        console.log(body);
    }

    function checkRegistration(response) {
        var response = JSON.parse(response.responseText);
        var header = response.header;
        var body = response.body;

        console.log(header);
        console.log(body);
    }



    class AuthorizationService {
        constructor() {
        }

        static logIn(login, password, callback) {
            var body = {login, password};
            let headers = new Map();
            headers.set('Content-Type','application/json; charset=utf8');

            HttpLocal.post(LOG_IN, body, headers, checklogIn);
        }

        static registration(login, password, callback) {
            var body = {login, password};
            let headers = new Map();
            headers.set('Content-Type','application/json; charset=utf8');

            HttpLocal.post(REGISTRATION, body, headers, checkRegistration);
        }

        static logOut() {
            localStorage.removeItem(TOKEN.JWT);
        }

    }

    window.AuthorizationService = AuthorizationService; // экспортируем класс

})();
