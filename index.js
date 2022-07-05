const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount = 48*30;
let tileSize = canvas.width + canvas.height / tileCount;
let headX = 10;
let headY = 10;

//game loop
function drawGame(){
    clearScreen();
    drawSnake();
    setTimeout(drawGame, 1000/ speed);
}


function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake(){
    ctx.fillStyle = 'yellow';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize);
}

drawGame();


