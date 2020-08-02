import React, { useState, useEffect } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const emptyBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    //check if the game already has a winner
    if (winner) return null;
    //check if the board is already clicked before
    if (board[index] !== " ") return null;

    setBoard(
      //bringing the previous clicks results each time current
      //player click in a new board
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    );

    //toggle between players
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    //8 ways to win this game:
    const waysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    //for each cell verify if cell is O or X, using every to check array.
    waysToWin.forEach((cells) => {
      if (cells.every((cell) => cell === "O")) setWinner("O");
      if (cells.every((cell) => cell === "X")) setWinner("X");
    });
    checkTie();
  };

  const checkTie = () => {
    if (board.every((item) => item !== " ")) setWinner("T"); //Tie
  };

  //only call winner when state has changed
  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  };

  return (
    <div>
      <h1 className="title">Tic Tac Toe</h1>
      <div class={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {winner && (
        <div className="footer">
          {winner === "T" ? (
            <h2 className="winner-message">
              <span className={winner}>Tie!</span>
            </h2>
          ) : (
            <h2 className="winner-message">
              <span className={winner}>{winner}</span> Won!
            </h2>
          )}

          <button onClick={resetGame}>Play Again!</button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
