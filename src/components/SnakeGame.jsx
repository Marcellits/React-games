import React, {useState, useRef, useEffect} from "react";
import {useInterval} from "../utils/useInterval";
import { 
    CANVAS_SIZE, 
    SNAKE_START, 
    DOT_START, 
    SCALE, SPEED, 
    DIRECTIONS} from '../utils/snakeConstants'



function SnakeGame (){
    const canvasRef = useRef()
    const [snake, setSnake] = useState(SNAKE_START)
    const [dot,setDot] = useState(DOT_START)
    const [dir, setDir] = useState([0, -1])
    const [speed, setSpeed] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const startGame = () => {
        setSnake(SNAKE_START);
        setDot(DOT_START);
        setDir([0, -1]);
        setSpeed(SPEED);
        setGameOver(false);
    }
    const endGame = () => {

    }
    const moveSnake = ({ keyCode }) => keyCode = 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
    

    const createDot = () => {

    }
    const checkCollision = () => {

    }
    const checkDotCollision = () => {

    }
    const gameLoop = () => {
        //making a copy of the snake (which is an array) 
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        //setting the new head for the snake, [ax x coordinate, ax y coordinate]
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] +dir[1]];
        //adding the new snake head in the array 
        snakeCopy.unshift(newSnakeHead)
        // removing the last element in the array , so it looks like moving
        snakeCopy.pop();
        setSnake(snakeCopy);
    } 

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        context.fillStyle = "gray";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "lightgreen";
        context.fillRect(dot[0], dot[1], 1 , 1);
    }, [snake, dot, gameOver])

    useInterval(() => gameLoop(), speed);

    return (
        <div className="App" role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <div>
             <h1 className="title">Snake Game</h1>
            </div>
            <div>
                <canvas
                style = {{ border :"1px solid black"}}
                ref={canvasRef}
                width = {`${CANVAS_SIZE[0]}px`}
                height = {`${CANVAS_SIZE[1]}px`}
                />
                {gameOver && <div>Game Over</div>}
                <button onClick={startGame}> Start Game</button>
             </div>   
        </div>
    )
}
export default SnakeGame;