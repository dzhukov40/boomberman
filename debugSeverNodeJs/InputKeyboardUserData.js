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

const PLAYER_BUTTON = {
    SPACE: {code: 32, key: 'SPACE'},
    LEFT: {code: 37, key: 'LEFT'},
    UP: {code: 38, key: 'UP'},
    RIGHT: {code: 39, key: 'RIGHT'},
    DOWN: {code: 40, key: 'DOWN'},
};

const PLAYER_SPRITE = {
    LEFT: 'left',
    RIGHT: 'right',
    FRONT: 'front',
    BACK: 'back',
};


function setKey(code, status, pressedKeys) {
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

    //TODO: пользователь нажал две кнопки, потом одну отжал, похоже это багуля
    removeSenselessVersions(pressedKeys);

    pressedKeys[key] = status;
}

function removeSenselessVersions(pressedKeys) {

    if(pressedKeys[PLAYER_BUTTON.RIGHT.key] === true && pressedKeys[PLAYER_BUTTON.LEFT.key]) {
        pressedKeys[PLAYER_BUTTON.RIGHT.key] = false;
        pressedKeys[PLAYER_BUTTON.LEFT.key] = false;
    }

    if(pressedKeys[PLAYER_BUTTON.UP.key] === true && pressedKeys[PLAYER_BUTTON.DOWN.key]) {
        pressedKeys[PLAYER_BUTTON.UP.key] = false;
        pressedKeys[PLAYER_BUTTON.DOWN.key] = false;
    }

}

/**
 *
 * @param msg
 * @param pressedKeys
 */
exports.setKeyFromClient =  function setKeyFromClient(msg, pressedKeys) {
    switch (msg.playerEventID) {
        case PLAYER_EVENT.KEY_DOWN:
            setKey(msg.playerEventData, true, pressedKeys);
            break;
        case PLAYER_EVENT.KEY_UP:
            setKey(msg.playerEventData, false, pressedKeys);
            break;
        case PLAYER_EVENT.BLUR:
            for (let property in pressedKeys) {
                delete pressedKeys[property];
            }
    }
};


/**
 *
 * @param key
 * @param pressedKeys
 * @return {*}
 */
exports.isButtonPressed = function isButtonPressed(key, pressedKeys)
{
    return pressedKeys[key.toUpperCase()];
}

/**
 * todo: убрать этот метод из этого файла
 * @param user
 * @param isButtonPressed
 */
exports.changeUserPosition = function changeUserPosition(user, isButtonPressed)
{
    let userPosition = [user.position[0], user.position[1]];

    if (user != null) {
        if (isButtonPressed(PLAYER_BUTTON.LEFT.key, user.pressedKeys)) {
            user.showSprite = PLAYER_SPRITE.LEFT;
            user.position[0] = user.position[0] - 1;
        }
        if (isButtonPressed(PLAYER_BUTTON.UP.key, user.pressedKeys)) {
            user.showSprite = PLAYER_SPRITE.BACK;
            user.position[1] = user.position[1] - 1;
        }
        if (isButtonPressed(PLAYER_BUTTON.RIGHT.key, user.pressedKeys)) {
            user.showSprite = PLAYER_SPRITE.RIGHT;
            user.position[0] = user.position[0] + 1;
        }
        if (isButtonPressed(PLAYER_BUTTON.DOWN.key, user.pressedKeys)) {
            user.showSprite = PLAYER_SPRITE.FRONT;
            user.position[1] = user.position[1] + 1;
        }
    }

    if (userPosition[0] === user.position[0] && userPosition[1] === user.position[1]) {
        return false;
    } else {
        return true
    }

};





