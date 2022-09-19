// Getting Canvas Object
const canvas = document.querySelector('canvas');
// Getting From Canvas Object 2D Context
const ctx = canvas.getContext('2d')

// Changing A Size Of Canvas
canvas.width = 1000;
canvas.height = 500;

// Creating Some Variables
const cw = canvas.width,
ch = canvas.height,
ballSize = 20;
let ballX = cw / 2 - ballSize / 2,
ballY = ch / 2 - ballSize / 2;

const paddelHeight = 100,
paddelWidth = 10,

playerX = 70;



// Creating A Ball Function That Draws Ball
function ball() {
    // Changing Color To White
    ctx.fillStyle = "#ffffff";
    // Drawing A Ball
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
}

// Executing Ball Function
ball()