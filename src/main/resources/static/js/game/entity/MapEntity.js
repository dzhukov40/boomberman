/**
 * Это определяющий сушность игрока
 *
 * @module MapEntity
 */
// (function () {
    "use strict";

import Entity from './Entity.js';

export class MapEntity extends Entity {
        constructor(position, sprites) {
            super(position, sprites);

            super.setShowSprite('front');
        }




    }

//    window.MapEntity = MapEntity; // экспортируем класс

//})();
