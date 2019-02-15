/**
 * Модуль
 * @module WebSocketService
 */
"use strict";

// определяем куда с фронта слать запросы
const host = "localhost";
const port = 9000;
const urlBase = "ws://" + host + ":" + port;


export class WebSocketService {
    constructor(url) {
        this.url = url != null ? url : urlBase;
        this.socket = new WebSocket(this.url);
    }

    sendMessage(message) {
        this.socket.send(message);
    }

    setOnOpenEvent(onOpen) {
        this.socket.onopen = onOpen;
    }

    setOnCloseEvent(onClose) {
        this.socket.onclose = onClose;
    }

    setOnGetMessage(onGetMessage) {
        this.socket.onmessage = onGetMessage;
    }

}
