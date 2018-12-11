/**
 * Модуль для работы с юзером
 */
(function () {
    "use strict";

    var HttpLocal = window.HttpLocal;

    const USER_SERVICE_PATH = '/user';
    const LOG_IN = USER_SERVICE_PATH + '/logIn';
    const LOG_OUT = USER_SERVICE_PATH + '/logOut';
    const LOAD_USERS = USER_SERVICE_PATH + '/loadUsers';

    class UserService {
        constructor() {
        }

        logIn(userName, password, callback) {
            var body = {userName, password};
            HttpLocal.post(LOG_IN, body, callback);
        }

        logOut(callback) {
            HttpLocal.get(LOG_OUT, callback);
        }

        loadUsers(callback) {
            HttpLocal.get(LOAD_USERS, callback);
        }

        /**
         * Проверяет залогинен ли пользователь
         * @return {boolean}
         */
        isLogIn() {
            return true;
        }

        whoIAm() {

        }



    }

    window.UserService = UserService; // экспортируем класс

})();
