/**
 *
 * @module PlayerEventDto
 */
(function () {
    "use strict";

    const GeneratorUUID = window.GeneratorUUID;

    // Это енамчик различных событий, генерируемых игроком
    const PLAYER_EVENT = {
        CHANGE_POSITION: 1,

    };

    // playerEvent
    class PlayerEventDto {
        constructor(playerEventID, playerEventData, userUUID) {
            this.playerEventID = playerEventID;
            this.playerEventData = playerEventData;
            this.userUUID = userUUID;

            this.eventUUID = GeneratorUUID.create_UUID();
            this.time = new Date().getTime();
        }

    }


    window.PlayerEventDto = PlayerEventDto; // экспортируем класс
    window.PLAYER_EVENT = PLAYER_EVENT; // экспортируем енамчик (*) можно вынести в ротдельный класс

})();
