import movePaddle from './movepaddle'
import moveBall from './moveball'




let ball = document.querySelector(".ball");
let paddleLeft = document.querySelector(".Rgauche");
let paddleRight = document.querySelector(".Rdroite");
let movePossible = {
    left : 0,
    right : 1,
    up : 1,
    down : 0
};
let scoreleft = 0
let scoreright = 0

let boardBottomY = 300;

//fluid way to move the paddle 60fps no scope 360
document.body.addEventListener("keydown", (e) =>{
    let startPaddleMove = setInterval(() => {movePaddle(e)}, Math.ceil(1000/60));
    document.body.addEventListener("keyup", () =>{clearInterval(startPaddleMove)});
    // document.body.addEventListener("keydown", () =>{clearInterval(startPaddleMove)})


});


let startBallMove = setInterval(moveBall, Math.ceil(1000/60));

