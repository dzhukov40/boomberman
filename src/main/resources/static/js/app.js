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

/*

*/


// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();


/*
сделаем функцию логиравания/разлогинивания пользователя
 */
function addLoginPanel() {
    var body = document.getElementById("body") ;

    var loginPanel = document.createElement('div');
    loginPanel.className = "login-panel";

    var titleLoginPanel = document.createElement('h2');
    titleLoginPanel.className = "title-login-panel";
    titleLoginPanel.appendChild(document.createTextNode("Hello man!"));

    var loginInput = document.createElement('input');
    loginInput.className = "login-panel-input";
    loginInput.placeholder = "login";


    var passwordInput = document.createElement('input');
    passwordInput.className = "password-panel-input";
    passwordInput.placeholder = "password";

    var signInButton = document.createElement('button');
    signInButton.className = "login-panel-signIn-button";
    signInButton.textContent ="Sign in";
    // signInButton.addEventListener("click", );




    loginPanel.appendChild(titleLoginPanel);
    loginPanel.appendChild(loginInput);
    loginPanel.appendChild(passwordInput);
    loginPanel.appendChild(signInButton);


    body.appendChild(loginPanel);
}

function sendLoginPassword(login, password) {

}












addLoginPanel();






