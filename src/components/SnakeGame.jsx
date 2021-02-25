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
        setSpeed(null)
        setGameOver(true)

    }
    const moveSnake = ({ keyCode }) => keyCode = 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
    

    const createDot = () => 
        dot.map((_, i) => Math.floor(Math.random() * (CANVAS_SIZE[i]/ SCALE)))
    
    const checkCollision = (piece, snk = snake) => {
        //checking if snake is colliding in the wall 
        if (
            piece[0] * SCALE >= CANVAS_SIZE[0] ||
            piece[0] < 0 ||
            piece[1] * SCALE >= CANVAS_SIZE[1] ||
            piece[1] < 0
        )
        return true;
        //checking if the snake is colliding with itself
        for(const segment of snk){
            if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
        }
            
    return false
    }
    

    const checkDotCollision = newSnake => {
        if(newSnake[0][0] === dot[0] && newSnake[0][1] === dot[1]){
            let newDot = createDot();
            while (checkCollision(newDot, newSnake)) {
                newDot = createDot()
            }
            setDot(newDot);
            return true
        }  
        return false
    }

    const gameLoop = () => {
        //making a copy of the snake (which is an array) 
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        //setting the new head for the snake, [ax x coordinate, ax y coordinate]
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] +dir[1]];
        //adding the new snake head in the array 
        snakeCopy.unshift(newSnakeHead)
        if (checkCollision(newSnakeHead)) endGame();
        if(!checkDotCollision(snakeCopy)) snakeCopy.pop()
        // removing the last element in the array , so it looks like moving
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
                
            </div>   
            <button onClick={startGame}> Start Game</button>
        </div>
    )
}
export default SnakeGame;