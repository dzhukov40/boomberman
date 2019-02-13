/**
 * Это класс работы со спрайтами
 *
 * Он принимает достаточно много аргументов, но не все из них являются обязательными:
 * img: изображение
 * pos: x и y координаты изображения на спрайт карте (*) Подразумевается, что все кадры анимации имеют один размер [size]
 * size: размеры (только одного кадра)
 * speed: скорость анимации, указываем минимальную разницу в 'mc' при которой обновляем фрейм
 * frames: массив индексов фреймов в порядке анимации (*) как необходимо проходить по кадрам анимации
 * dir: в каком направлении двигаться по спрайт карте: 'horizontal (по-умолчанию) или 'vertical'
 * once: true, если необходимо отобразить только один цикл анимации, false — (по-умолчанию)
 * @module Sprite
 */
//(function () {
    "use strict";

export class Sprite {
        constructor(img, pos, size, speed, frames, dir, once) {
            this.img = img;
            this.pos = pos;
            this.size = size;
            this.speed = typeof speed === 'number' ? speed : 0;
            this.frames = frames;
            this.dir = dir || 'horizontal';
            this.once = once;

            this.savedTime = 0;
            this.imgSize = [size[0], size[1]]; // конечный размер показываемого изображения
        }

        /**
         * обновляем внутреннее время, для расчета, какой кадр показывать
         * @param time текущее время в милисекундах
         */
        update(time) {
            let dt = time - this.savedTime;
            if (dt  > this.speed) {
                this.savedTime += dt;
            }
        }

        /**
         * рисуем спрайт
         * @param ctx контекст конваса
         */
        render (ctx) {
            let frame;

            if(this.speed > 0) {
                let max = this.frames.length;      // сколько картинок всего в анимации
                let idx = Math.floor(this.savedTime); // Math.floor() возвращает наибольшее целое число, которое меньше или равно данному числу
                frame = this.frames[idx % max];    // определяем какой кадр спрайта надо показать из имеющихся

                // если надо было один цикл анимации показать
                if(this.once && idx >= max) {
                    this.done = true;
                    return;
                }
            }
            else {
                frame = 0;
            }

            let x = this.pos[0]; // x и y координаты изображения на спрайт карте
            let y = this.pos[1];

            if(this.dir === 'vertical') {
                y += frame * this.size[1];
            }
            else {
                x += frame * this.size[0];
            }

            ctx.drawImage(this.img,
                x, y,
                this.size[0], this.size[1],
                0, 0,
                this.imgSize[0], this.imgSize[1]);
        }

        changeImgSize(coefficient) {
            this.imgSize[0] = this.imgSize[0] * coefficient;
            this.imgSize[1] = this.imgSize[1] * coefficient;
        }

        setImgSize(imgSize) {
            this.imgSize = imgSize;
        }

        getImgSize() {
            return this.imgSize;
        }

    }

//     window.Sprite = Sprite; // экспортируем класс

// })();
