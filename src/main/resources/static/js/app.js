/*
  Будет один *.js файл в котором опишем все ф-ии
 */


// ----------------------------------------------------------------------
// подключаем jquery
// ----------------------------------------------------------------------

// подключаем jquery (*) gbitv это в index.html
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>


// (*) это второй вариант подключения, но тогда проблемы использовать ф-ии в [index.html]
// http://kulibaba.net/programming/javascript/include-scripts
// Но как быть, если вам необходимо подключить скрипт внутри другого скрипта?
/*function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}*/
// теперь у нас есть такая функция, которая прокинит это в heder нашей страницы
// include("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");

// импортируем все экспортируемые ф-ии из модуля
// import * as sendToServer from './sendToServer';


"use strict";

//TODO: добавить webPack и переписать через import/export
const GeneratorUUID = window.GeneratorUUID;
const HttpLocal = window.HttpLocal;
const ResourceLoader = window.ResourceLoader;
const Sprite = window.Sprite;
const LayerOfCanvas = window.LayerOfCanvas;
const MapGenerator = window.MapGenerator;
const InputKeyboardUserData = window.InputKeyboardUserData;
const UserEntity = window.UserEntity;
const MapEntity = window.MapEntity;
const AuthorizationService = window.AuthorizationService;
const WebSocketService = window.WebSocketService;
const PlayerEventDto = window.PlayerEventDto;
const PLAYER_EVENT = window.PLAYER_EVENT;



// подключение к webSocket
let webSocketConnectionUrl = "ws://localhost:3030";
let webSocketService = new WebSocketService(webSocketConnectionUrl);
// webSocketService.setOnGetMessage();
console.log("попробовали присосаться к веб сокету " + webSocketConnectionUrl);


let userUUID = GeneratorUUID.create_UUID();


function sayHello(){
    if(InputKeyboardUserData.isButtonPressed('SPACE')) {
        alert("sayHello()");
    }
}

function testGetRequest(){
    let headers = new Map();
    headers.set('Content-Type','application/json; charset=utf8');
    HttpLocal.get('/echo', headers, sendToConsole);
}

function testShowErrorMessage() {
    console.log("пук");

    let mapGenerator = new MapGenerator(null);

    let jsonMap = [
        {name: "GRASS", position: [0,0]},
        {name: "GROUND", position: [32,0]},
        {name: "GROUND", position: [64,0]},
        {name: "GRASS", position: [96,0]},
        {name: "WALL", position: [128,0]},

        {name: "GRASS", position: [0,32]},
        {name: "GROUND", position: [32,32]},
        {name: "GROUND", position: [64,32]},
        {name: "GRASS", position: [96,32]},
        {name: "WALL", position: [128,32]},
    ];
    let mapElements_2 = mapGenerator.convertJsonMapToMapElements(jsonMap);

    let generateGameMap = mapGenerator.generate("gameMap", mapElements_2);

    // TODO: порядок добавления определяет какой слой перекрывает какие другие слои
    generateGameMap.append(canvasElement);
    layerOfCanvas.append(canvasElement);


    layersOfCanvas.push(generateGameMap);
    layersOfCanvas.push(layerOfCanvas);
}

function testSendMessage(){
/*    let headers = new Map();
    headers.set('Content-Type','application/json; charset=utf8');
    HttpLocal.get('/chat/get', headers, sendToConsole);*/

    webSocketService.sendMessage(JSON.stringify ("приветики"));
}

let canvasSize = [1500, 500];
let layerOfCanvas = new LayerOfCanvas("mainLayer", canvasSize);
let canvasElement = document.getElementById("canvas");



// все слои канваса
let layersOfCanvas = [];





ResourceLoader.load([
    '../img/game/Blocks/Blocks.png',
    '../img/game/Bomb/Bomb.png',
    '../img/game/Boomberman/Bman.png',
    '../img/game/Creep/Creep.png',
    '../img/game/Flame/Flame.png',
    '../img/game/Powerups/Powerups.png',

    '../img/game/Units/batman.png',
    '../img/game/Units/character_silver.png',

    '../img/game/MapBlocks/tileset.png'
]);


ResourceLoader.onReady(function () {
    console.log("ресурсы загружены");
    main();
});

function main() {


    layerOfCanvas.getContext().fillRect(5, 5, 5, 5);

    let backSprite = new Sprite(ResourceLoader.get('../img/game/Units/character_silver.png'), [0, 0], [42, 42], 100, [0, 1, 2, 3]);
    let rightSprite = new Sprite(ResourceLoader.get('../img/game/Units/character_silver.png'), [0, 42], [42, 42], 100, [0, 1, 2, 3]);
    let frontSprite = new Sprite(ResourceLoader.get('../img/game/Units/character_silver.png'), [0, 84], [42, 42], 100, [0, 1, 2, 3]);
    let leftSprite = new Sprite(ResourceLoader.get('../img/game/Units/character_silver.png'), [0, 126], [42, 42], 100, [0, 1, 2, 3]);



    let user = new UserEntity(
        [50, 50],
        new Map()
            .set('back', backSprite)
            .set('front', frontSprite)
            .set('right', rightSprite)
            .set('left', leftSprite)
    );
    user.setUUID(userUUID);


    layerOfCanvas.addEntity(user);


    // добавим другого пользователя на канвас, если он появится
    webSocketService.setOnGetMessage(function (message) {
        let messageObject = JSON.parse(message.data);
        console.log("сообщение от сервера:" + messageObject);


        if (!layerOfCanvas.hasEntity(messageObject._UUID)) {
            let user2 = new UserEntity(
                [messageObject._position[0], messageObject._position[1]],
                new Map()
                    .set('back', backSprite)
                    .set('front', frontSprite)
                    .set('right', rightSprite)
                    .set('left', leftSprite)
            );
            user2.setUUID(messageObject._UUID);
            user2.setShowSprite(messageObject._showSprite);

            layerOfCanvas.addEntity(user2);
        } else {
            let user = layerOfCanvas.getEntity(messageObject._UUID);
            user.position = [messageObject._position[0], messageObject._position[1]];
            user.setShowSprite(messageObject._showSprite);
        }


    });



// прикрепляем отправку пользовательского ввода
    new PlayerEventDto(PLAYER_EVENT.CHANGE_POSITION, user.position, userUUID);


InputKeyboardUserData.addKeyDownEvent(function (event) {
    let jsonMessage = JSON.stringify(new PlayerEventDto(PLAYER_EVENT.KEY_DOWN, event.keyCode, userUUID));
    webSocketService.sendMessage(jsonMessage);
});

InputKeyboardUserData.addKeyUpEvent(function (event) {
    let jsonMessage = JSON.stringify(new PlayerEventDto(PLAYER_EVENT.KEY_UP, event.keyCode, userUUID));
    webSocketService.sendMessage(jsonMessage);
});

InputKeyboardUserData.addBlurEvent(function () {
    let jsonMessage = JSON.stringify(new PlayerEventDto(PLAYER_EVENT.BLUR, null, userUUID));
    webSocketService.sendMessage(jsonMessage);
});




    var then = Date.now();
    var now;
    var delta;

    function animate() {
        now = Date.now();
        delta = now - then;

        // отрисовываем все слои канваса
        layersOfCanvas.forEach(function (layerOfCanvas) {
            layerOfCanvas.clear();
        });
        layersOfCanvas.forEach(function (layerOfCanvas) {
            layerOfCanvas.update(Date.now());
            layerOfCanvas.render();
        });


        requestAnimationFrame(animate);
    }

    animate();

}













function logIn(){
    var login = document.getElementById('loginTextInput').value;
    var password = document.getElementById('passwordTextInput').value;

    AuthorizationService.logIn(login,password,sendToConsole)
}

function registration(){
    var login = document.getElementById('loginTextInput').value;
    var password = document.getElementById('passwordTextInput').value;

    AuthorizationService.registration(login,password,sendToConsole)
}


function logOut() {
    AuthorizationService.logOut();
}




function sendToConsole(msg) {
    console.log(msg);
}





















