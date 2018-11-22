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


    class AuthorizationService {
        constructor() {
        }

        static logIn(login, password, callback) {
            var body = {login, password};
            HttpLocal.post(LOG_IN, body, callback);
        }

        static registration(login, password, callback) {
            var body = {login, password};
            HttpLocal.post(REGISTRATION, body, callback);
        }

        static logOut(callback) {
            HttpLocal.get(LOG_OUT, callback);
        }

    }

    window.AuthorizationService = AuthorizationService; // экспортируем класс

})();
