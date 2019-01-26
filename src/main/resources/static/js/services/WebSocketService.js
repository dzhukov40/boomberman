/**
 * Модуль
 * @module WebSocketService
 */
(function () {
    "use strict";

    // определяем куда с фронта слать запросы
    const host = "localhost";
    const port = 9000;
    const urlBase = "ws://" + host + ":" + port;


    class WebSocketService {
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
            //this.socket.onmessage = onGetMessage;

            this.socket.onmessage = function (msg) {
                try {
                    var json = JSON.parse(message.data);
                    console.log(json);
                } catch (e) {
                    console.log('This doesn\'t look like a valid JSON: ', message.data);
                    return;
                }
            }
        }


    }

    window.WebSocketService = WebSocketService; // экспортируем класс

})();