/**
 **/
"use strict";



class Entity {
    constructor(UUID) {
        this._UUID = UUID;
        this._position = [0,0];
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
}

module.exports = Entity;
