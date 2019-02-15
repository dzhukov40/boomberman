/**
 *
 * @module GameStateDto
 */
"use strict";

export class GameStateDto {
    constructor(entities) {
        this.entities = entities != null ? entities : [];
        this.data = Date.now();
    }

}
