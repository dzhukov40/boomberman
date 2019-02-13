/**
 * Это
 *
 * @module Entity
 */
// (function () {
    "use strict";

  //  const GeneratorUUID = window.GeneratorUUID;
import { GeneratorUUID } from '../../utility/GeneratorUUID.js';

export default class Entity {
        constructor(position, sprites) {
            this.position = position;
            this.sprites = sprites;
            this.showSprite = null;

            this.uuid = GeneratorUUID.create_UUID();
        }

        setUUID(uuid) {
            this.uuid = uuid;
        }

        getUUID() {
            return this.uuid;
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

//    window.Entity = Entity; // экспортируем класс

//})();
