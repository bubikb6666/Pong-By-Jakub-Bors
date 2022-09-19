// Getting Canvas Object
const canvas = document.querySelector('canvas');
// Getting From Canvas Object 2D Context
const ctx = canvas.getContext('2d')

// Changing A Size Of Canvas
canvas.width = 1000;
canvas.height = 500;

// Making A Variables That Are A Size Of Canvas 
const cw = canvas.width;
const ch = canvas.height;

// Making A Variables For Ball
const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

// Making A Ball Function That Draws Ball
function ball() {
    // Changing Color To White
    ctx.fillStyle = "#ffffff";
    // Drawing A Ball
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
}

// Executing Ball Function
ball()