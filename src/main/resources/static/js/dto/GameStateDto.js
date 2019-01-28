/**
 *
 * @module GameStateDto
 */
(function () {
    "use strict";

    //
    class GameStateDto {
        constructor(entities) {
            this.entities = entities != null ? entities : [];
            this.data = Date.now();
        }



    }

    window.GameStateDto = GameStateDto; // экспортируем класс

})();
