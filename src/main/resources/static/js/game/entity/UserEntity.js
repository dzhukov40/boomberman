/**
 * Это определяющий сушность игрока
 *
 * @module UserEntity
 */
"use strict";

import Entity from './Entity.js';


export class UserEntity extends Entity {
    constructor(position, sprites) {
        super(position, sprites);

        super.setShowSprite('front');
    }

}