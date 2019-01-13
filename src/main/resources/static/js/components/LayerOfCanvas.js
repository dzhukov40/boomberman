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
            //this.ctx.scale(0.8,0.8);
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
            this.ctx.save();
            this.ctx.fillStyle = "#ffffff";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.restore();
        }

        update(time) {
            entities.forEach(function (entity) {
                if (entity.getShowSprite() != null) {
                    entity.getShowSprite().update(time);
                }
            });
        }

        render() {
            let context = this.ctx;
            entities.forEach(function (entity) {
                if (entity.getShowSprite() != null) {
                    context.save();
                    context.translate(entity.getPosition()[0], entity.getPosition()[1]);
                    entity.getShowSprite().render(context);
                    context.restore();
                }
            });
        }


    }



    window.LayerOfCanvas = LayerOfCanvas; // экспортируем класс

})();
