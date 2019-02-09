/**
 **/
"use strict";


class EnvelopeDto {
    constructor(time) {
        this._time = time || Date.now();
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }
}

module.exports = EnvelopeDto;