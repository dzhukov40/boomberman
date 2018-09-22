/*
Это конструктор класса Sprite.
Он принимает достаточно много аргументов, но не все из них являются обязательными:
  url: путь к изображению
  pos: x и y координаты изображения на спрайт карте (*) Подразумевается, что все кадры анимации имеют один размер [size]
  size: размеры (только одного кадра)
  speed: скорость анимации в фрейм/с - 0 (по-умолчанию)
  frames: массив индексов фреймов в порядке анимации (*) как необходимо проходить по кадрам анимации
  dir: в каком направлении двигаться по спрайт карте: 'horizontal (по-умолчанию) или 'vertical'
  once: true, если необходимо отобразить только один цикл анимации, false — (по-умолчанию)
*/
(function() {
    function Sprite(url, pos, size, speed, frames, dir, once) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
    };

    Sprite.prototype = {
        // метод для обновления анимации, передаем время пройденное с последнего вызова этой ф-ии
        update: function(dt) {
            this._index += this.speed*dt;
        },

        // метод для отрисовки себя
        render: function(ctx) {
            var frame;

            if(this.speed > 0) {
                var max = this.frames.length;      // сколько картинок всего в анимации
                var idx = Math.floor(this._index); // Math.floor() возвращает наибольшее целое число, которое меньше или равно данному числу
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

            // x и y координаты изображения на спрайт карте
            var x = this.pos[0];
            var y = this.pos[1];

            if(this.dir == 'vertical') {
                y += frame * this.size[1];
            }
            else {
                x += frame * this.size[0];
            }

            /* рисуем наш спрайт [https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/drawImage]
               void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                 - image: Элемент для отображения в контексте.
                 - sx: Координата по оси X, верхнего левого угла фрагмента, который будет вырезан из изображения-источника и помещен в контекст-приемник.
                 - sy: Координата по оси Y верхнего левого угла фрагмента, который будет вырезан из изображения-источника и помещен в контекст-приемник.
                 - sWidth: Ширина фрагмента, который будет вырезан из изображения источника и помещен в контекст-приемник.
                   - Если не задана, фрагмент от точки, заданной sx и sy до правого нижнего угла источника будет целиком скопирован в контекст-приемник.
                 - sHeight: Высота фрагмента, который будет вырезан из изображения источника и помещен в контекст-приемник.
                 - dx: Координата по оси Х, обозначающая стартовую точку холста-приемника, в которую будет помещен верхний левый угол исходного image.
                 - dy: Координата по оси Y, обозначающая стартовую точку холста-приемника, в которую будет помещен верхний левый угол исходного image.
                 - dWidth: Ширина изображения, полученного из исходного image. Эта опция позволяет масштабировать изображение по ширине.
                   - Если опция не задана, изображение не будет масштабировано.
                 - dHeight: Высота изображения, полученного из исходного image. Эта опция позволяет масштабировать изображение по высоте.
                   - Если опция не задана, изображение не будет масштабировано.
            */
            ctx.drawImage(resources.get(this.url),
                x, y,
                this.size[0], this.size[1],
                0, 0,
                this.size[0], this.size[1]);
        }
    };

    window.Sprite = Sprite; // что это?
})();