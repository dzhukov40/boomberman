/**
 * Модуль для работы с юзером
 */
"use strict";

import {HttpLocal} from '../modules/HttpLocal.js';
import {TOKEN} from '../enums/Token.js';


const AUTHORIZATION_SERVICE_PATH = '/authorization';
const LOG_IN = AUTHORIZATION_SERVICE_PATH + '/logIn';
const REGISTRATION = AUTHORIZATION_SERVICE_PATH + '/registration';
const LOG_OUT = AUTHORIZATION_SERVICE_PATH + '/logOut';
const IS_LOG_IN = AUTHORIZATION_SERVICE_PATH + '/isLogIn';


function checklogIn(response) {
    let jsonResponse = JSON.parse(response.responseText);
    let header = jsonResponse.header;
    let body = jsonResponse.body;

    if (header === TOKEN.JWT) {
        localStorage.setItem(TOKEN.JWT, body);
    }
    console.log(header);
    console.log(body);
}

function checkRegistration(response) {
    let jsonResponse = JSON.parse(response.responseText);
    let header = jsonResponse.header;
    let body = jsonResponse.body;

    console.log(header);
    console.log(body);
}


export class AuthorizationService {
    constructor() {
    }

    static logIn(login, password, callback) {
        let body = {login, password};
        let headers = new Map();
        headers.set('Content-Type', 'application/json; charset=utf8');

        HttpLocal.post(LOG_IN, body, headers, checklogIn);
    }

    static registration(login, password, callback) {
        let body = {login, password};
        let headers = new Map();
        headers.set('Content-Type', 'application/json; charset=utf8');

        HttpLocal.post(REGISTRATION, body, headers, checkRegistration);
    }

    static logOut() {
        localStorage.removeItem(TOKEN.JWT);
    }

}