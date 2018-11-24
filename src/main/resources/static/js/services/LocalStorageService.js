/**
 * Модуль для работы с юзером
 */
(function () {

    var HttpLocal = window.HttpLocal;

    const USER_SERVICE_PATH = '/user';
    const LOG_IN = USER_SERVICE_PATH + '/logIn';
    const LOG_OUT = USER_SERVICE_PATH + '/logOut';
    const LOAD_USERS = USER_SERVICE_PATH + '/loadUsers';

    class LocalStorageService {
        constructor() {
        }

        logIn(userName, password, callback) {
            var body = {userName, password};
            HttpLocal.post(LOG_IN, body, callback);
        }




    }

    window.LocalStorageService = LocalStorageService; // экспортируем класс

})();
