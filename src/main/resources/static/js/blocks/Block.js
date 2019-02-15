/**
 * Это обертка для html элементов, для предоставления этих методов элементу
 * @module Block
 */
"use strict";

export class Block {
    constructor(element) {
        this.element = element;
    }

    static create(tagName = 'div', classes = [], attributes = {}) {
        const element = document.createElement(tagName);
        classes.forEach(function (className) {
            element.classList.add(className);
        });
        for (let name in attributes) {
            el.setAttribute(name, attributes[name]);
        }
        return new Block(element);
    }

    hide() {
        this.element.setAttribute('hidden', true);
    }

    show() {
        this.element.removeAttribute('hidden');
    }

    setText(text) {
        this.element.textContent = text;
    }

    append(block) {
        this.element.appendChild(block);
        return this;
    }

    /**
     * вешаем событие на элемент, возвращает ф-ию для удаления подпискаи на это событие
     * @param event
     * @param callback
     * @return {any}
     */
    on(event, callback) {
        this.element.addEventListener(event, callback);
        return function () {
            this.element.removeEventListener(event, callback);
        }.bind(this);
    }

}