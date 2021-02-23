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
        
    }
    const endGame = () => {

    }
    const moveSnake = () => {

    }
    const createDot = () => {

    }
    const checkCollision = () => {

    }
    const checkDotCollision = () => {

    }
    const gameLoop = () => {

    } 
    useEffect(() => {

    }, [snake, dot, gameOver])

    return (
        <div className="App">
            <div>
             <h1 className="title">Snake Game</h1>
            </div>
            <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)} >
                <canvas
                style = {{ border :"1px solid black"}}
                ref={canvasRef}
                width = {`${CANVAS_SIZE[0]}px`}
                height = {`${CANVAS_SIZE[1]}px`}
                />
                {gameOver && <div>Game Over</div>}
                <button onclick={startGame}> Start Game</button>
             </div>   
        </div>
    )
}
export default SnakeGame;