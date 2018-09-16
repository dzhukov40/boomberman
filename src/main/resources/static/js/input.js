/*
  Модуль обработки нажатия клавиш
  Суть модуля, реализовать ф-ию [ isDown ]
    - эта функция принимает код клавиши и говорит, нажата сейчас кнопка или нет
*/
(function() {
    var pressedKeys = {}; // тут будем хранить статусы кнопок

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        // отслеживаемые кнопки
        switch(code) {
            case 32: key = 'SPACE'; break;
            case 37: key = 'LEFT'; break;
            case 38: key = 'UP'; break;
            case 39: key = 'RIGHT'; break;
            case 40: key = 'DOWN'; break;
            default: key = String.fromCharCode(code); // Convert ASCII codes to letters
        }

        pressedKeys[key] = status;  // добавляем статус кнопки в мапу
    }

    // обработчик на событие нажатие кнопки
    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    // обработчик на событие отжатие кнопки
    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    // Событие blur вызывается когда элемент теряет фокус
    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();