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
}
export default movePaddle;