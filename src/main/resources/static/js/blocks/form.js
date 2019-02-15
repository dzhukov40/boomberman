/**
 * Это обертка для html элементов, для предоставления этих методов элементу
 * @module Form
 */
"use strict";


import {Block} from './Block.js';

class Form extends Block {
    constructor(fields) {
        const element = document.createElement('form');
        super(element);

        fields.forEach(function (field) {
            const f = Block.create('input', field.classes, field.attrebutes);
            this.append(f);
        }).bind(this);
    }

}
