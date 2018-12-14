/**
 *
 * @module GameCanvas
 */
(function () {
    "use strict";

    const GAME_CANVAS_CLASS = 'game-canvas';

    var entites = [];

    class GameCanvas {
        constructor() {
            if(!GameCanvas.instance){
                this.perentDiv = document.getElementById("canvas");
                this.canvas = document.createElement('canvas');
                this.canvas.classList.add(GAME_CANVAS_CLASS);
                this.canvas.id = "gameCanvas";
                this.perentDiv.appendChild(this.canvas);

                this.ctx = this.canvas.getContext('2d');
                GameCanvas.instance = this;
            }
            return GameCanvas.instance;
        }

        set(entite) {

        }




    }



    window.GameCanvas = GameCanvas; // экспортируем класс

})();
