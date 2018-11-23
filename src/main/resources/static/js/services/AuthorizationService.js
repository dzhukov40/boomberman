/**
 * Модуль для работы с юзером
 */
(function () {

    var HttpLocal = window.HttpLocal;

    const AUTHORIZATION_SERVICE_PATH = '/authorization';
    const LOG_IN = AUTHORIZATION_SERVICE_PATH + '/logIn';
    const REGISTRATION = AUTHORIZATION_SERVICE_PATH + '/registration';
    const LOG_OUT = AUTHORIZATION_SERVICE_PATH + '/logOut';
    const IS_LOG_IN = AUTHORIZATION_SERVICE_PATH + '/isLogIn';


    const TOKEN_KEY = "jwtToken"

    function getJwtToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    function setJwtToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }

    function removeJwtToken() {
        localStorage.removeItem(TOKEN_KEY);
    }





    function checklogIn(response) {
        var response = JSON.parse(response.responseText);
        var header = response.header;
        var body = response.body;

        if (header === "JWT") {
            setJwtToken(body);
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

            HttpLocal.post(LOG_IN, body, checklogIn);
        }

        static registration(login, password, callback) {
            var body = {login, password};
            HttpLocal.post(REGISTRATION, body, checkRegistration);
        }

        static logOut(callback) {
            HttpLocal.get(LOG_OUT, callback);
        }

    }

    window.AuthorizationService = AuthorizationService; // экспортируем класс

})();
