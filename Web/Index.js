const canvas = document.getElementById("game");
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
        
let ballSpeedX = 6;
let ballSpeedY = 6;
        
function player(e) {
    ctx.clearRect(playerX, playerY, paddelWidth, paddelHeight);
    playerY = e.clientY - canvas.offsetTop - paddelHeight / 2;
    if (playerY >= ch - paddelHeight) {
        playerY = ch - paddelHeight;
    }
            
    if (playerY <= 0) {
        playerY = 0;
    }
        
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}
        
function ai() {
    ctx.clearRect(aiX, aiY, paddelWidth, paddelHeight);
    aiPosition();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
}
        
function ball() {
    ctx.clearRect(ballX, ballY, ballSize, ballSize);
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
        
    if (ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
    }
        
    if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
    }
}
        
function table() {
    for (let linePosition = 20; linePosition < ch; linePosition +=30) {
        ctx.fillStyle = "gray";
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
    }
}
        
function aiPosition() {
    aiY = ballY;
}
        
canvas.addEventListener("mousemove", player);
        
function game() {
    table();
    ball();
    ai();
}
        
setInterval(game, 1000 / 60);
