/*
  Будет один *.js файл в котором опишем все ф-ии
 */


// ----------------------------------------------------------------------
// подключаем jquery
// ----------------------------------------------------------------------

// подключаем jquery (*) gbitv это в index.html
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>


// (*) это второй вариант подключения, но тогда проблемы использовать ф-ии в [index.html]
// http://kulibaba.net/programming/javascript/include-scripts
// Но как быть, если вам необходимо подключить скрипт внутри другого скрипта?
/*function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}*/
// теперь у нас есть такая функция, которая прокинит это в heder нашей страницы
//include("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");


// определяем куда с фронта слать запросы
var host = "localhost";
var port = 8080;


function sayHello(){
    alert("sayHello()");
}




/*
  эта игра найдена на хабре https://habr.com/post/184666/

*/


// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);


// Game state
var player = {
    pos: [0, 0],
    sprite: new Sprite('img/sprites.png', [0, 0], [39, 39], 16, [0, 1])
};

var bullets = [];
var enemies = [];
var explosions = [];

var lastFire = Date.now();
var gameTime = 0;
var isGameOver;
var terrainPattern;

var score = 0;
var scoreEl = document.getElementById('score');

// Speed in pixels per second
var playerSpeed = 200;
var bulletSpeed = 500;
var enemySpeed = 100;

// Добави вывод fps
var fps = document.getElementById('fps');


// The app game loop
var lastTime;
var lastfpsTime;
function app() {
    var now = Date.now();               // возвращает количество миллисекунд
    var dt = (now - lastTime) / 1000.0; // получим время в секундах (*) например: 0.201 с

    if (now - lastfpsTime > 1000) {
        fps.innerHTML = "fps: " + (1/dt).toFixed(1);  // выводим fps, фиксируем точность вывода (*) раз в секунду
        lastfpsTime = now;
    }


    update(dt);                         // передаем пройденное время на которое мир должен поменяться
    render();                           // отрисовываем мир

    lastTime = now;
    requestAnimFrame(app);
};

function init() {
    // делаем фом, многократно вставляя наш загруженный квадратик заднего фона
    terrainPattern = ctx.createPattern(resources.get('img/terrain.png'), 'repeat');

    // вешаем обработчик на кнопку перезапуска игры
    document.getElementById('play-again').addEventListener('click', function() {
        reset();
    });

    reset();
    lastTime = Date.now();
    lastfpsTime = Date.now();
    app(); //вход в бесконечный цикл отрисовки изменения игрового мира
}

/*
  Загруженные изображения хранятся в кеше в resourcesCache,
  и когда все изображения буду загружены, будут вызваны все callback'и.
  - (*) Указываем на функцию начала игры, ведь все необходимые ресурсы мы загрузили
  - (*) Что бы получить изображение используется resources.get('img/sprites.png). Легко!
*/
resources.load([
    'img/sprites.png',
    'img/terrain.png'
]);
resources.onReady(init);




// Update game objects
function update(dt) {
    gameTime += dt;                     // получаем текущее время игры

    handleInput(dt);
    updateEntities(dt);

    // это добавление нового врага (*) Math.pow - возвести в степень
    // .993 - так задана вероятность добавления нового врага?
    if(Math.random() < 1 - Math.pow(.993, gameTime)) {
        enemies.push({
            // позиция элемента на игровом поле
            pos: [canvas.width, Math.random() * (canvas.height - 39)],
            // url, pos, size, speed, frames, dir, once
            sprite: new Sprite('img/sprites.png', [0, 78], [80, 39], 6, [0, 1, 2, 3, 2, 1])
        });
    }

    checkCollisions();

    scoreEl.innerHTML = score;
};

// обрабатываем нажатия клавиш и изменяем положение игрока, учитывая скорость [ playerSpeed ]
function handleInput(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        player.pos[1] += playerSpeed * dt;
    }

    if(input.isDown('UP') || input.isDown('w')) {
        player.pos[1] -= playerSpeed * dt;
    }

    if(input.isDown('LEFT') || input.isDown('a')) {
        player.pos[0] -= playerSpeed * dt;
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        player.pos[0] += playerSpeed * dt;
    }

    // пульки
    // 100 - захардкожено время минимальное создание новых пуль
    if(input.isDown('SPACE') && !isGameOver && Date.now() - lastFire > 100) {
        // позиция игрока, источника пуль, получаем точку центра спрайта игрока
        var x = player.pos[0] + player.sprite.size[0] / 2;
        var y = player.pos[1] + player.sprite.size[1] / 2;

        // добавляем обьекты пули в масив игровых обьектов
        bullets.push({ pos: [x, y],
            dir: 'forward',
            sprite: new Sprite('img/sprites.png', [0, 39], [18, 8]) });
        bullets.push({ pos: [x, y],
            dir: 'up',
            sprite: new Sprite('img/sprites.png', [0, 50], [9, 5]) });
        bullets.push({ pos: [x, y],
            dir: 'down',
            sprite: new Sprite('img/sprites.png', [0, 60], [9, 5]) });

        lastFire = Date.now();
    }
}


// Все сущности нуждаются в обновлении. У нас есть сущность игрока и 3 массива с сущностями пуль, врагов и взрывов.
function updateEntities(dt) {
    // Update the player sprite animation
    player.sprite.update(dt);

    // Update all the bullets
    for(var i=0; i<bullets.length; i++) {
        var bullet = bullets[i];

        switch(bullet.dir) {
            case 'up': bullet.pos[1] -= bulletSpeed * dt; break;
            case 'down': bullet.pos[1] += bulletSpeed * dt; break;
            default:
                bullet.pos[0] += bulletSpeed * dt;
        }

        // Remove the bullet if it goes offscreen
        if(bullet.pos[1] < 0 || bullet.pos[1] > canvas.height || bullet.pos[0] > canvas.width) {
            bullets.splice(i, 1); // удаление из массива (*) начиная с позиции i-ой удалить 1 обьект
            i--;
        }
    }

    // Update all the enemies
    for(var i=0; i<enemies.length; i++) {
        enemies[i].pos[0] -= enemySpeed * dt;
        enemies[i].sprite.update(dt);

        // Remove if offscreen
        if(enemies[i].pos[0] + enemies[i].sprite.size[0] < 0) {
            enemies.splice(i, 1); // удаление из массива (*) начиная с позиции i-ой удалить 1 обьект
            i--;
        }
    }

    // Update all the explosions
    for(var i=0; i<explosions.length; i++) {
        explosions[i].sprite.update(dt);

        // Remove if animation is done
        if(explosions[i].sprite.done) {
            explosions.splice(i, 1); // удаление из массива (*) начиная с позиции i-ой удалить 1 обьект
            i--;
        }
    }
}

// Collisions (*) эти два метода используются для определения столкновения обьектов
// у меня была реализация побольше, проверить надо :)
function collides(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 || b <= y2 || y > b2);
}

function boxCollides(pos, size, pos2, size2) {
    return collides(pos[0], pos[1],
        pos[0] + size[0], pos[1] + size[1],
        pos2[0], pos2[1],
        pos2[0] + size2[0], pos2[1] + size2[1]);
}

// тут происходит проверка столкновений обьектов
function checkCollisions() {
    checkPlayerBounds(); // эта функция не дает играку выйти за пределы игрового поля

    // Run collision detection for all enemies and bullets
    for(var i=0; i<enemies.length; i++) {
        var pos = enemies[i].pos;
        var size = enemies[i].sprite.size;

        for(var j=0; j<bullets.length; j++) {
            var pos2 = bullets[j].pos;
            var size2 = bullets[j].sprite.size;

            // столкновение пули и врага, удаляется пуля и враг, создается взрыв
            if(boxCollides(pos, size, pos2, size2)) {
                enemies.splice(i, 1);  // Remove the enemy
                i--;                   // это зачем? // TODO: похоже что нужно но зачем?)))
                score += 100;          // Add score

                // Add an explosion
                explosions.push({
                    pos: pos,
                    // указали проиграть анимацию один раз, обьект никуда не сохраняем!
                    sprite: new Sprite('img/sprites.png',
                        [0, 117],
                        [39, 39],
                        16,
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        null,
                        true)
                });

                // Remove the bullet and stop this iteration
                bullets.splice(j, 1);
                break; // Остановка внутреннего цикла перебора пуль, так как врага уже не существует
            }
        }

        // это проверка столкновения игрока и врага
        if(boxCollides(pos, size, player.pos, player.sprite.size)) {
            gameOver();
        }
    }
}

// эта функция не дает играку выйти за пределы игрового поля
function checkPlayerBounds() {
    // Check bounds
    if(player.pos[0] < 0) {
        player.pos[0] = 0;
    }
    else if(player.pos[0] > canvas.width - player.sprite.size[0]) {
        player.pos[0] = canvas.width - player.sprite.size[0];
    }

    if(player.pos[1] < 0) {
        player.pos[1] = 0;
    }
    else if(player.pos[1] > canvas.height - player.sprite.size[1]) {
        player.pos[1] = canvas.height - player.sprite.size[1];
    }
}

// Draw everything
function render() {
    ctx.fillStyle = terrainPattern; // рисуем фон он не меняется, надо ли его каждый раз выводить?
    ctx.fillRect(0, 0, canvas.width, canvas.height); // зарисованный прямоугольник

    // Render the player if the game isn't over
    if(!isGameOver) {
        renderEntity(player);
    }

    renderEntities(bullets);
    renderEntities(enemies);
    renderEntities(explosions);
};

function renderEntities(list) {
    for(var i=0; i<list.length; i++) {
        renderEntity(list[i]);
    }
}

/*
  Сохраняет текущее состояние стилей рисования, используя для этого стек, так что вы можете
  отменить любые внесенные в него изменения с помощью метода restore().
*/
function renderEntity(entity) {
    ctx.save();
    // Добавляет трансформацию перемещения, перемещая начальную точку системы координат холста на x по горизонтали и y по вертикали.
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx); //TODO: не очень ясно как сработала отрисовка
    ctx.restore();
}

// Game over
function gameOver() {
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-over-overlay').style.display = 'block';
    isGameOver = true;
}

// Reset game to original state
function reset() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-over-overlay').style.display = 'none';
    isGameOver = false;
    gameTime = 0;
    score = 0;

    enemies = [];
    bullets = [];

    player.pos = [50, canvas.height / 2];
};




























