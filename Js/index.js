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
const paddelWidth = 10;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;



// Creating A Ball Function That Draws Ball
function ball() {
    // Changing Color To White
    ctx.fillStyle = "#ffffff";
    // Drawing A Ball
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
}

// Executing Ball Function
ball()