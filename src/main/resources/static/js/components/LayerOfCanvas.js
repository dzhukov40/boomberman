/**
 *
 * @module LayerOfCanvas
 */
(function () {
    "use strict";

    var entities = [];

    class LayerOfCanvas {
        constructor(layerId) {
            this.canvas = document.createElement('canvas');
            //this.canvas.classList.add(GAME_CANVAS_CLASS);
            this.canvas.id = layerId;
            this.ctx = this.canvas.getContext('2d');
        }

        append(parentElement) {
            parentElement.appendChild(this.canvas);
        }

        getContext() {
            return this.ctx;
        }

        addEntity(entity) {
            entities.push(entity);
        }

        clear() {
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        update(dt) {
            entities.forEach(function (entity) {
                entity.getSprite().update(dt);
            });
        }

        render() {
            let context = this.ctx;
            entities.forEach(function (entity) {
                context.save();
                context.translate(entity.getPosition()[0], entity.getPosition()[1]);
                entity.getSprite().render(context);
                context.restore();
            });
        }


    }



    window.LayerOfCanvas = LayerOfCanvas; // экспортируем класс

})();
