/**
 * Это
 *
 * @module Entity
 */
"use strict";

import {GeneratorUUID} from '../../utility/GeneratorUUID.js';


export default class Entity {
    constructor(position, sprites) {
        this._showSprite = null;

        this._uuid = GeneratorUUID.create_UUID();
        this._position = position;
        this._sprites = sprites;
    }

    get uuid() {
        return this._uuid;
    }

    set uuid(value) {
        this._uuid = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get sprites() {
        return this._sprites;
    }

    get showSprite() {
        return this._showSprite;
    }

    setShowSprite(showSprite) {
        this._showSprite = this._sprites.get(showSprite);
    }

}
