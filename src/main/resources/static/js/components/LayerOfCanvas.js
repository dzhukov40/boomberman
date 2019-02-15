/**
 *
 * @module LayerOfCanvas
 */
"use strict";

export class LayerOfCanvas {
    constructor(layerId, size) {
        this.canvas = document.createElement('canvas');
        //this.canvas.classList.add(GAME_CANVAS_CLASS);
        this.canvas.id = layerId;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = size[0];
        this.canvas.height = size[1];

        this.entities = new Map();
        this.subLaerOfCanvas = [];
    }

    append(parentElement) {
        parentElement.appendChild(this.canvas);
    }

    getContext() {
        return this.ctx;
    }

    addEntity(entity) {
        //TODO: надо подумать над перезаписыванием
        this.entities.set(entity.uuid, entity);
    }

    getEntity(entityUUID) {
        return this.entities.get(entityUUID);
    }

    hasEntity(entityUUID) {
        return this.entities.has(entityUUID);
    }

    deleteEntity(entityUUID) {
        //TODO: надо подумать над перезаписыванием
        this.entities.delete(entityUUID);
    }

    clear() {
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    }

    update(time) {
        this.entities.forEach(function (entity) {
            if (entity.showSprite != null) {
                entity.showSprite.update(time);
            }
        });
    }

    render() {
        let context = this.ctx;
        this.entities.forEach(function (entity) {
            if (entity.showSprite != null) {
                context.save();
                context.translate(entity.position[0], entity.position[1]);
                entity.showSprite.render(context);
                context.restore();
            }
        });
    }

}
