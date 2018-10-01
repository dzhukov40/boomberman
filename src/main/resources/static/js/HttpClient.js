
// суть модульного обьединения это сождание
// в каждом файле самовызывающейся ф-ии которая добавит
// класс в рутовый элемент 'window'
// -> экспортировать: window.exportModule = имя класса
// -> импортировать: let имя переменной = window.exportModule = имя класса
(function () {
    // определяем куда с фронта слать запросы
    var host = "localhost";
    var port = 8070;

    const xhr = new XMLHttpRequest();
    const urlBase = "http://" + host + ":" + port;


    class HttpClient {
        constructor() {
        }


        static get(urlDelta) {
            xhr.open('GET', urlBase + urlDelta, true);
            xhr.addEventListener("load", function () {
                console.log(this.responseText);
            });
            //xhr.setRequestHeader("Access-Control-Allow-Origin","http://127.0.0.1:8070");
            xhr.timeout = 5000;

            xhr.send();
        }


    }

    // экспортируем класс
    window.HttpClient = HttpClient;






})();
