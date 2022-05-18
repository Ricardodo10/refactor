
function moveBall()
{
    if (movePossible.down && movePossible.right){
        ball.style.top = `${ball.getBoundingClientRect().top + 3}px`;
        ball.style.left = `${ball.getBoundingClientRect().left + 3}px`;
    }
    if (movePossible.down && movePossible.left){
        ball.style.top = `${ball.getBoundingClientRect().top + 3}px`;
        ball.style.left = `${ball.getBoundingClientRect().left - 3}px`;
    }
    if (movePossible.up && movePossible.left){
        ball.style.top = `${ball.getBoundingClientRect().top - 3}px`;
        ball.style.left = `${ball.getBoundingClientRect().left - 3}px`;
    }
    if (movePossible.up && movePossible.right){
        ball.style.top = `${ball.getBoundingClientRect().top - 3}px`;
        ball.style.left = `${ball.getBoundingClientRect().left + 3}px`;
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
export default moveBall;
