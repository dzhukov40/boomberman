/**
 **/
"use strict";
const Entity = require('./Entity');


class UserEntity extends Entity {
    constructor(userUUID) {
        super(userUUID);
        this._pressedKeys = {};
        this._showSprite = null;
    }

    get pressedKeys() {
        return this._pressedKeys;
    }

    set pressedKeys(value) {
        this._pressedKeys = value;
    }

    get showSprite() {
        return this._showSprite;
    }

    set showSprite(value) {
        this._showSprite = value;
    }
}

module.exports = UserEntity;