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
//include("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");


// определяем куда с фронта слать запросы
var host = "localhost";
var port = 8080;


function sayHello(){
    alert("sayHello()");
}

