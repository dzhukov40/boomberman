/**
 * Это определяющий сушность игрока
 *
 * @module MapEntity
 */
(function () {
    "use strict";

    const Entity = window.Entity;

    class MapEntity extends Entity {
        constructor(position, sprites) {
            super(position, sprites);

            super.setShowSprite('front');
        }




    }

    window.MapEntity = MapEntity; // экспортируем класс

})();
