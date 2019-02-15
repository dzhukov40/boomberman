/**
 *
 * @module InputKeyboardUserData
 */
"use strict";

export const PLAYER_BUTTON = {
    SPACE: {code: 32, key: 'SPACE'},
    LEFT: {code: 37, key: 'LEFT'},
    UP: {code: 38, key: 'UP'},
    RIGHT: {code: 39, key: 'RIGHT'},
    DOWN: {code: 40, key: 'DOWN'},
};


let pressedKeys = {};

function setKey(code, status) {
    let key;

    for (let property in PLAYER_BUTTON) {
        if (code === PLAYER_BUTTON[property].code) {
            key = PLAYER_BUTTON[property].key;
            break;
        }
    }

    //TODO: нужны ли нам не отслеживаемые кнопки?
    if (key === undefined) {
        key = String.fromCharCode(code);
    }

    pressedKeys[key] = status;
}

/**
 * событие: пользователь нажал кнопку
 */
document.addEventListener('keydown', (e) => { setKey(e, true); });

/**
 * событие: пользователь отжал кнопку
 */
document.addEventListener('keyup', (e) => { setKey(e, false); });

/**
 * событие: пользователь переключает фокус с текущего окна.
 */
window.addEventListener('blur', () => { pressedKeys = {}; });


export class InputKeyboardUserData {
    constructor() {
    }

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