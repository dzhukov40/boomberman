/**
 * как мы представим нашу карту?
 * @module MapGenerator
 */
// (function () {
    "use strict";

    import { LayerOfCanvas } from '../components/LayerOfCanvas.js';
    // const LayerOfCanvas = window.LayerOfCanvas;

    import { ResourceLoader } from '../components/ResourceLoader.js';
    //const ResourceLoader = window.ResourceLoader;

    import { Sprite } from '../game/entity/Sprite.js';
    // const Sprite = window.Sprite;

    import { MapEntity } from '../game/entity/MapEntity.js';
    //const MapEntity = window.MapEntity;




    // Это енамчик различных элементов карты
    const filePath = '../img/game/MapBlocks/';
    const MAP_ELEMENT = {
        GRASS : {value: 0, elementSetFile: filePath + 'tileset.png', elementPosition: [0,0], elementSize: [32,32]},
        GROUND : {value: 1, elementSetFile: filePath + 'tileset.png', elementPosition: [0,96], elementSize: [32,32]},
        BUTTON : {value: 2, elementSetFile: filePath + 'tileset.png', elementPosition: [0,192], elementSize: [32,32]},
        WALL : {value: 3, elementSetFile: filePath + 'tileset.png', elementPosition: [0,416], elementSize: [32,32]}
    };



    var entities = [];

export class MapGenerator {
        constructor(elementSetFiles) {
            this.elementSetFiles = elementSetFiles;
        }

        /**
         *
         * @param layerId
         * @param mapElements
         */
        generate(layerId, mapElements) {
            let canvasSize = [1500, 500]; // TODO: убрать потом размер
            let layerOfCanvas = new LayerOfCanvas(layerId, canvasSize);

            mapElements.forEach(function (element) {
               layerOfCanvas.addEntity(element);
            });

            return layerOfCanvas;
        }


        convertJsonMapToMapElements(jsonMap) {
            let mapElements = [];

            jsonMap.forEach(function (element) {
                let mapElement = MAP_ELEMENT[element.name];
                let mapElementSprite = new Sprite(
                    ResourceLoader.get(mapElement.elementSetFile),
                    mapElement.elementPosition,
                    mapElement.elementSize,
                    0,
                    [0]);

                let mapEntry = new MapEntity(
                    element.position,
                    new Map().set('front', mapElementSprite)
                );

                mapElements.push(mapEntry);
            });

            return mapElements;
        }

    }



//    window.MapGenerator = MapGenerator; // экспортируем класс

// })();
