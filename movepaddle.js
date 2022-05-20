import moveBall from "./moveball"
import resetBall from "./resetball"
function movePaddle(e)
{
    if (paddleRight.getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top + 5 &&
        e.code === "ArrowUp")
    {
        paddleRight.style.top = `${paddleRight.getBoundingClientRect().top - 15}px`
    }

    else if ( paddleRight.getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + boardBottomY &&
        e.code === "ArrowDown")
    {
        paddleRight.style.top = `${paddleRight.getBoundingClientRect().top + 15}px`
    }
    else if (paddleLeft.getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top + 5 &&
        e.key === "a")
    {
        paddleLeft.style.top = `${paddleLeft.getBoundingClientRect().top - 15}px`
    }

    else if ( paddleLeft.getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + boardBottomY &&
        e.key === "w")
    {
        paddleLeft.style.top = `${paddleLeft.getBoundingClientRect().top + 15}px`
    }
    if (ball.getBoundingClientRect().top > document.querySelector(".board").getBoundingClientRect().top + 440)
    {
        movePossible.down = 0;
        movePossible.up = 1;
    }
    if (ball.getBoundingClientRect().top < document.querySelector(".board").getBoundingClientRect().top + 5)
    {
        movePossible.down = 1;
        movePossible.up = 0;
    }
    if (
        ball.getBoundingClientRect().left < paddleLeft.getBoundingClientRect().left + 25 && 
        (ball.getBoundingClientRect().top > paddleLeft.getBoundingClientRect().top && ball.getBoundingClientRect().top < paddleLeft.getBoundingClientRect().top + 220)
    )
    {
        movePossible.right = 1;
        movePossible.left = 0;
    }
    if (
        ball.getBoundingClientRect().left > paddleRight.getBoundingClientRect().left - 56 && 
        (ball.getBoundingClientRect().top > paddleRight.getBoundingClientRect().top && ball.getBoundingClientRect().top < paddleRight.getBoundingClientRect().top + 220)
    )
    {
        movePossible.right = 0;
        movePossible.left = 1;

    }
    if (ball.getBoundingClientRect().left > paddleRight.getBoundingClientRect().left - 20 )
    {
        movePossible.right = 0;
        movePossible.left = 0;
        movePossible.up = 0;
        movePossible.down = 0;
        clearInterval(startBallMove);
        //add score event here   +1 for left side --- score event needs to reset position of the ball and set properties of movePossible to 1
        scoreleft++
        document.querySelector("#scoreLeft").innerHTML=scoreleft
        resetBall()
        
    }
    if (ball.getBoundingClientRect().left < paddleLeft.getBoundingClientRect().left - 10)
    {
        movePossible.right = 0;
        movePossible.left = 0;
        movePossible.up = 0;
        movePossible.down = 0;
        clearInterval(startBallMove);
        //add score event here   +1 for right side --- score event needs to reset position of the ball and set properties of movePossible to 1
        scoreright++
        document.querySelector("#scoreRight").innerHTML=scoreright
        resetBall()
        
    }
}
document.body.addEventListener("keydown", (e) =>{
    let startPaddleMove = setInterval(() => {movePaddle(e)}, Math.ceil(1000/60));
    document.body.addEventListener("keyup", () =>{clearInterval(startPaddleMove)});
});
let boardBottomY = 300;
let paddleLeft = document.querySelector(".Rgauche");
let paddleRight = document.querySelector(".Rdroite");
let ball = document.querySelector(".ball");
let movePossible = {
    left : 0,
    right : 1,
    up : 1,
    down : 0
};
export default movePaddle;
