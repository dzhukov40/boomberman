/**
 **/
"use strict";

const EnvelopeDto = require('./EnvelopeDto');

class UserDto extends EnvelopeDto {
    constructor(UUID) {
        super();
        this._UUID = UUID;
        this._position = [0,0];
        this._showSprite = null;
    }

    get UUID() {
        return this._UUID;
    }

    set UUID(value) {
        this._UUID = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get showSprite() {
        return this._showSprite;
    }

    set showSprite(value) {
        this._showSprite = value;
    }
}

module.exports = UserDto;