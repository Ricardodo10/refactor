import movePaddle from './movepaddle'
import moveBall from './moveball'
import resetBall from './resetball'



document.body.addEventListener("keydown", (e) =>{
    let startPaddleMove = setInterval(() => {movePaddle(e)}, Math.ceil(1000/60));
    document.body.addEventListener("keyup", () =>{clearInterval(startPaddleMove)});
 document.body.addEventListener("keydown", () =>{clearInterval(startPaddleMove)})


});



