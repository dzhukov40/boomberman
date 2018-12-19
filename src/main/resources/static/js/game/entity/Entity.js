/**
 * Это
 *
 * @module Entity
 */
(function () {
    "use strict";

    class Entity {
        constructor(position, sprite) {
            this.position = position;
            this.sprite = sprite;
        }

        getSprite() {
            return this.sprite;
        }

        getPosition() {
            return this.position;
        }



    }

    window.Entity = Entity; // экспортируем класс

})();
