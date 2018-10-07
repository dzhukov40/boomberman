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


var HttpLocal = window.HttpLocal;
// const httpClient = new HttpClient();

function sayHello(){
    alert("sayHello()");
}






function testGetRequest(){
    HttpLocal.get('/echo',sendToConsole);
}

function postUser(){
    HttpLocal.post('/autarisation/logIn',{login:"den",password:"pass..."},sendToConsole);
}


function sendToConsole(msg) {
    console.log(msg);
}





















