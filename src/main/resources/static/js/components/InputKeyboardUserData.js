/**
 *
 * @module InputKeyboardUserData
 */
// (function () {
    "use strict";

    let pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
            case 32:
                key = 'SPACE'; break;
            case 37:
                key = 'LEFT'; break;
            case 38:
                key = 'UP'; break;
            case 39:
                key = 'RIGHT'; break;
            case 40:
                key = 'DOWN'; break;
            default:
                key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    /**
     * событие: пользователь нажал кнопку
     */
    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    /**
     * событие: пользователь отжал кнопку
     */
    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    /**
     * событие: пользователь переключает фокус с текущего окна.
     */
    window.addEventListener('blur', function() {
        pressedKeys = {};
    });


export class InputKeyboardUserData {
        constructor() {}

        /**
         * метод говорит нажата ли кнопка
         */
        static isButtonPressed(key) {
            return pressedKeys[key.toUpperCase()];
        }

        static addKeyDownEvent(event) {
            document.addEventListener('keydown', event);
        }

        static addKeyUpEvent(event) {
            document.addEventListener('keyup', event);
        }

        static addBlurEvent(event) {
            window.addEventListener('blur', event);
        }

    }

//     window.InputKeyboardUserData = InputKeyboardUserData; // экспортируем класс

// })();
