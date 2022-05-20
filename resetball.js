import moveBall from "./moveball";
import movePaddle from "./movepaddle";

function resetBall(){
    console.log('fonction resetball appel')
    ball.style.top= '200px'
    ball.style.left='700px'
    startBallMove = setInterval(moveBall, Math.ceil(1000/60));
}
let ball = document.querySelector(".ball");


export default resetBall; 
