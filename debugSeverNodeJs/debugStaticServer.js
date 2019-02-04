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

/**
 * тип состоит ис соединения и сообщений
 * clients[0] = {connection: null, msgFromClient: [], frameCalculationMsg: [], userEntity, null}
 */
let clients = [];


let server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + "Server is listening on port " + webSocketsServerPort);
});


let wsServer = new webSocketServer({
    httpServer: server
});


wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    let connection = request.accept(null, request.origin);
    let userEntity = { position:[0,0], pressedKeys: {} };
    let client = {connection: connection, messageFromClient: [], frameCalculationMsg: [], userEntity: userEntity};
    clients.push(client);

    // user sent some message
    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept only text
            // console.log((new Date()) + "getMessage: " + message.utf8Data);


            client.messageFromClient.push(JSON.parse(message.utf8Data));


        } else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        }
    });

    // user disconnected
    connection.on('close', function(connection) {
        console.log((new Date()) + "closeConnection" + connection);
    });


});





/**
 * Game loop
 */
const minFrameTime = 1000;

const {setKeyFromClient, isButtonPressed, changeUserPosition} = require("./InputKeyboardUserData");




function gameLoopFunction() {

    // делаем отсечку по всем полученным сообщениям, перемещая их из 'messageFromClient' в 'frameCalculationMsg'
    clients.forEach(function (element) {
        // перемещаем и удаляем
        element.frameCalculationMsg = element.messageFromClient.splice(0, element.messageFromClient.length);

        // проход по всем сообщениям это и будет набор событей который произошел на стороне пользователя!!!
        element.frameCalculationMsg.forEach(function (msg) {
            setKeyFromClient(msg, element.userEntity.pressedKeys);
        });

        // меняем координаты пользователя
        changeUserPosition(element.userEntity, isButtonPressed);


        console.log("element.frameCalculationMsg.length:" + element.frameCalculationMsg.length + "    element.userEntity.position:" + element.userEntity.position);
    });










    console.log("tort");

}





// начать повторы с интервалом minFrameTime
let gameLoop = setInterval(gameLoopFunction, minFrameTime);

