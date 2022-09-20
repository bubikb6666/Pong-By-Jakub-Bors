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

function player() {
    ctx.clearRect(playerX, playerY, paddelWidth, paddelHeight);
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

function ai() {
    ctx.clearRect(aiX, aiY, paddelWidth, paddelHeight);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
}

function ball() {
    ctx.clearRect(ballX, ballY, ballSize, ballSize);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
}

ball();
player();
ai();