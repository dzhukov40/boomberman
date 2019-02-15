/**
 *
 * @module PlayerEventDto
 */
"use strict";

import { GeneratorUUID } from '../utility/GeneratorUUID.js';

// Это енамчик различных событий, генерируемых игроком
export const PLAYER_EVENT = {
    KEY_DOWN: 1,
    KEY_UP: 2,
    BLUR: 3,
};

export class PlayerEventDto {
    constructor(playerEventID, playerEventData, userUUID) {
        this.playerEventID = playerEventID;
        this.playerEventData = playerEventData;
        this.userUUID = userUUID;

        this.eventUUID = GeneratorUUID.create_UUID();
        this.time = new Date().getTime();
    }

}