function resetBall(){
    
    ball.style.top= '200px'
    ball.style.left='700px'
    movePossible.right = 1;
    movePossible.left = 0;
    movePossible.up = 0;
    movePossible.down = 1;
    startBallMove = setInterval(moveBall, Math.ceil(1000/60));
}
export default resetBall; 