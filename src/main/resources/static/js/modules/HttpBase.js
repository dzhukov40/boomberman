/**
 * позволяет сдделать Http запрос на любой url
 * @module HttpBase
 */
"use strict";

const timeout = 5000;

// Это енамчик статусов обработки
const READY_STATE = {
    REQUEST_NOT_INITIALIZED: 0,
    SERVER_CONNECTION_ESTABLISHED: 1,
    REQUEST_RECEIVED: 2,
    PROCESSING_REQUEST: 3,
    RESPONSE_IS_READY: 4
};

// Это енамчик статусов обработки
const STATUS = {
    OK: 200,
    FORBIDDEN: 403,
    PAGE_NOT_FOUND: 404,
};


export class HttpBase {
    constructor() {}

    static get(url, headers, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (this.readyState === READY_STATE.RESPONSE_IS_READY && this.status === STATUS.OK) {
                callback(this);
            }
        };

        headers.forEach((v, k) => {
            xhr.setRequestHeader(k, v);
        });

        xhr.timeout = timeout;

        xhr.send();
    }

    static post(url, body, headers, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onload = function () {
            if (this.readyState === READY_STATE.RESPONSE_IS_READY && this.status === STATUS.OK) {
                callback(this);
            }
        };

        headers.forEach((v, k) => {
            xhr.setRequestHeader(k, v);
        });

        xhr.timeout = timeout;

        xhr.send(JSON.stringify(body));
    }

}
