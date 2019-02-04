/**
 *
 * @module InputKeyboardUserData
 */
"use strict";

const PLAYER_EVENT = {
    KEY_DOWN: 1,
    KEY_UP : 2,
    BLUR : 3,
};

function setKey(code, status, pressedKeys) {
    let key;

    switch (code) {
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


exports.setKeyFromClient =  function setKeyFromClient(msg, pressedKeys) {
    switch (msg.playerEventID) {
        case PLAYER_EVENT.KEY_DOWN:
            setKey(msg.playerEventData, true, pressedKeys);
            break;
        case PLAYER_EVENT.KEY_UP:
            setKey(msg.playerEventData, false, pressedKeys);
            break;
        case PLAYER_EVENT.BLUR:
            pressedKeys = {};
    }
}


/**
 * метод говорит нажата ли кнопка
 */
exports.isButtonPressed = function isButtonPressed(key, pressedKeys)
{
    return pressedKeys[key.toUpperCase()];
}




exports.changeUserPosition = function changeUserPosition(user, isButtonPressed)
{
    if (isButtonPressed('LEFT', user.pressedKeys)) {
        //user.setShowSprite('left');
        user.position[0] = user.position[0] - 1;
    }
    if (isButtonPressed('UP', user.pressedKeys)) {
        //user.setShowSprite('back');
        user.position[1] = user.position[1] - 1;
    }
    if (isButtonPressed('RIGHT', user.pressedKeys)) {
        //user.setShowSprite('right');
        user.position[0] = user.position[0] + 1;
    }
    if (isButtonPressed('DOWN', user.pressedKeys)) {
        //user.setShowSprite('front');
        user.position[1] = user.position[1] + 1;
    }

}





