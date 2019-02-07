/**
 **/
"use strict";
const Entity = require('./Entity');


class UserEntity extends Entity {
    constructor(userUUID) {
        super(userUUID);
        this._pressedKeys = {};
    }

    get pressedKeys() {
        return this._pressedKeys;
    }

    set pressedKeys(value) {
        this._pressedKeys = value;
    }
}

module.exports = UserEntity;