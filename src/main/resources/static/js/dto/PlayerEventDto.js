/**
 *
 * @module PlayerEventDto
 */
(function () {
    "use strict";

    // Это енамчик различных событий, генерируемых игроком
    const PLAYER_EVENT = {
        KEY_DOWN: 1,
        KEY_UP : 2,
        BLUR : 3,
    };

    // playerEvent
    class PlayerEventDto {
        constructor(playerEvent) {
            this.playerEvent = playerEvent;
        }

    }



    window.PlayerEventDto = PlayerEventDto; // экспортируем класс

})();
