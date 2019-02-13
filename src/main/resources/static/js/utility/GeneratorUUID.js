/**
 *
 * @module GeneratorUUID
 */
//(function () {
    "use strict";


export class GeneratorUUID {
        constructor() {}

        /**
         * метод генерирует уникальный UUID
         * https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
         */
        static create_UUID(key) {
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16);
            });
            return uuid;
        }

    }

//    window.GeneratorUUID = GeneratorUUID; // экспортируем класс

//})();
