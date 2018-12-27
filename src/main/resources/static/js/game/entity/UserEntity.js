/**
 * Это определяющий сушность игрока
 *
 * @module UserEntity
 */
(function () {
    "use strict";

    const Entity = window.Entity;

    class UserEntity extends Entity {
        constructor(position, sprites) {
            super(position, sprites);

            super.setShowSprite('front');
        }




    }

    window.UserEntity = UserEntity; // экспортируем класс

})();
