/**
 * Модуль для работы с юзером
 */
"use strict";

import {HttpLocal} from '../modules/HttpLocal.js';


const CHAT_SERVICE_PATH = '/chat';
const SEND = CHAT_SERVICE_PATH + '/send';


export class ChatService {
    constructor() {
    }

    send(userName, password, callback) {
        let body = {userName, password};
        HttpLocal.post(SEND, body, callback);
    }

}
