/**
 * Это
 *
 * @module Entity
 */
(function () {
    "use strict";

    class Entity {


        constructor(position, sprites) {
            this.position = position;
            this.sprites = sprites;
            this.showSprite = null;

        }

        getSprites() {
            return this.sprites;
        }

        getPosition() {
            return this.position;
        }

        getShowSprite() {
            return this.showSprite;
        }

        setShowSprite(showSprite) {
            this.showSprite = this.sprites.get(showSprite);
        }

    }

    window.Entity = Entity; // экспортируем класс

})();
