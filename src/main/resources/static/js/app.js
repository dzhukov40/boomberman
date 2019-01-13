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

const AuthorizationService = window.AuthorizationService;
const HttpLocal = window.HttpLocal;
const LayerOfCanvas = window.LayerOfCanvas;
const InputKeyboardUserData = window.InputKeyboardUserData;
const ResourceLoader = window.ResourceLoader;
const Sprite = window.Sprite;
const UserEntity = window.UserEntity;




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

function testShowErrorMessage(){
    console.log("пук");
}

function testSendMessage(){
    let headers = new Map();
    headers.set('Content-Type','application/json; charset=utf8');
    HttpLocal.get('/chat/get', headers, sendToConsole);
}


let layerOfCanvas = new LayerOfCanvas("mainLayer");
let canvasElement = document.getElementById("canvas");

layerOfCanvas.append(canvasElement);


ResourceLoader.load([
    '../img/game/Blocks/Blocks.png',
    '../img/game/Bomb/Bomb.png',
    '../img/game/Boomberman/Bman.png',
    '../img/game/Creep/Creep.png',
    '../img/game/Flame/Flame.png',
    '../img/game/Powerups/Powerups.png',

    '../img/game/Units/batman.png',
    '../img/game/Units/character_silver.png'
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


/*    backSprite.changeImgSize(0.9);
    frontSprite.changeImgSize(0.8);
    rightSprite.changeImgSize(0.7);
    leftSprite.changeImgSize(0.6);*/


    let user = new UserEntity(
        [10, 10],
        new Map()
            .set('back', backSprite)
            .set('front', frontSprite)
            .set('right', rightSprite)
            .set('left', leftSprite)
    );


    layerOfCanvas.addEntity(user);


    var then = Date.now();
    var now;
    var delta;

    function animate() {
        now = Date.now();
        delta = now - then;

        layerOfCanvas.clear();
        layerOfCanvas.update(Date.now());
        layerOfCanvas.render();



        if(InputKeyboardUserData.isButtonPressed('LEFT')) {
            user.setShowSprite('left');
        } else if (InputKeyboardUserData.isButtonPressed('UP')) {
            user.setShowSprite('back');
        } else if (InputKeyboardUserData.isButtonPressed('RIGHT')) {
            user.setShowSprite('right');
        } else if (InputKeyboardUserData.isButtonPressed('DOWN')) {
            user.setShowSprite('front');
        }




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





















