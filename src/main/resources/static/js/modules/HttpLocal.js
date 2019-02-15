/**
 * Модуль для локальных запросов к беку на нашем домене
 * @module HttpLocal
 */
"use strict";

import {TOKEN} from '../enums/Token.js';
import { HttpBase } from './HttpBase.js';

// определяем куда с фронта слать запросы
let host = "localhost";
let port = 8070;
const urlBase = "http://" + host + ":" + port;

// мы пиркрепляем токен
const AUTHORIZATION_BEARER = "Bearer";

function createAuthorizationTokenHeader() {
    let token = localStorage.getItem(TOKEN.JWT);
    return AUTHORIZATION_BEARER + " " + token;
}


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
