/**
 * Это определяющий сушность игрока
 *
 * @module UserEntity
 */
(function () {
    "use strict";

    const Entity = window.Entity;

    class UserEntity extends Entity {
        constructor(position, sprite) {
            super(position, sprite);
        }




    }

    window.UserEntity = UserEntity; // экспортируем класс

})();
