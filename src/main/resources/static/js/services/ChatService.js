/**
 * Модуль для работы с юзером
 */
// (function () {
    "use strict";

    let HttpLocal = window.HttpLocal;

    const CHAT_SERVICE_PATH = '/chat';
    const SEND = CHAT_SERVICE_PATH + '/send';


export class ChatService {
        constructor() {
        }

        send(userName, password, callback) {
            var body = {userName, password};
            HttpLocal.post(SEND, body, callback);
        }




    }

//   window.ChatService = ChatService; // экспортируем класс

// })();
