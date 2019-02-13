/**
 *
 * @module PlayerEventDto
 */
// (function () {
    "use strict";

// const GeneratorUUID = window.GeneratorUUID;
import { GeneratorUUID } from '../utility/GeneratorUUID.js';

    // Это енамчик различных событий, генерируемых игроком
export const PLAYER_EVENT = {
        KEY_DOWN: 1,
        KEY_UP : 2,
        BLUR : 3,
    };


    // playerEvent
//module.exports.PlayerEventDto =
export class PlayerEventDto {
        constructor(playerEventID, playerEventData, userUUID) {
            this.playerEventID = playerEventID;
            this.playerEventData = playerEventData;
            this.userUUID = userUUID;

            this.eventUUID = GeneratorUUID.create_UUID();
            this.time = new Date().getTime();
        }

    }


/*module.exports = {
    t : PLAYER_EVENT,
    PlayerEventDto : PlayerEventDto
}*/



//    window.PlayerEventDto = PlayerEventDto; // экспортируем класс
//     window.PLAYER_EVENT = PLAYER_EVENT; // экспортируем енамчик (*) можно вынести в ротдельный класс

//})();
