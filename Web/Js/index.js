const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;
const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1
let ballSpeedY = 1;

function player() {
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

function ai() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
}

function ball() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
}

function table() {
    for (let linePosition = 20; linePosition < ch; linePosition +=30) {
        ctx.fillStyle = "gray";
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
    }
}

function game() {
    table();
    ctx.clearRect(ballX, ballY, ballSize, ballSize);
    ball();
    ctx.clearRect(playerX, playerY, paddelWidth, paddelHeight);
    player();
    ctx.clearRect(aiX, aiY, paddelWidth, paddelHeight);
    ai();
}

setInterval(game, 1000 / 60);