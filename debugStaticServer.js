/*
Это сервер на nodeJS для отдачи статики
  - так получиться ускорить процесс разработки UI
    - меняя файлы статики, мы сразу сможем увидеть изменения в браузере при перезагрузке страницы
  - запустить сервер [ node debugStaticServer.js ]
  - (*) мы использовали фреймворк, который необходимо установить в системе
    - установка Express - [ npm install express ]
  - (*) мы начали использовать webSocket
    - установить Websocket - [ npm install websocket ]
 */

"use strict";

const hostname = '127.0.0.1';
const port = 3000;
const staticPath = 'src/main/resources/static/';

// берём Express - это фреймворк, делающий создание большинства сайтов очень простым.
const express = require('express'); // подключаем модуль
const app = express();              // создаём Express-приложение

// Всё, что вы сложите в папку /public, может быть запрошено из браузера и будет отображено.
app.use(express.static('src/main/resources/static/'));

// запускаем сервер на порту 8080
app.listen(port);
console.log(`Server running at http://${hostname}:${port}/`); // отправляем сообщения в лог
console.log(`All static content from: ./${staticPath}`);



/**
 * WebSocket server
 */
const webSocketsServerPort = 3030;

const webSocketServer = require('websocket').server;
const http = require('http');

// list of currently connected clients (users)
var clients = [];



var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + "Server is listening on port " + webSocketsServerPort);
});


var wsServer = new webSocketServer({
    httpServer: server
});


wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    var connection = request.accept(null, request.origin);
    // we need to know client index to remove them on 'close' event
    var index = clients.push(connection) - 1;

    // user sent some message
    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept only text
            console.log((new Date()) + "getMessage: " + message.utf8Data);

            // broadcast message to all connected clients
            for (var i=0; i < clients.length; i++) {
                clients[i].sendUTF(message);
            }
        } else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        }
    });

    // user disconnected
    connection.on('close', function(connection) {
        console.log((new Date()) + "closeConnection" + connection);
    });


});






