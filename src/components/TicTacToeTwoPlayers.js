import React, { useState, useEffect } from "react";
import "../styles/TTT.css";

function TicTacToeTwoPlayers() {
  const emptyBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    //check if the game already has a winner
    if (winner) return null;
    //check if the board is already clicked before
    if (board[index] !== "") return null;

    setBoard(
      //bringing the previous clicks results each time current
      //player clicks in a new board
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
      //horizontal
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      //vertical
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      //diagonal
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    //for each cell verify if cell is O or X, using every to check array.
    waysToWin.forEach((cells) => {
      if (cells.every((cell) => cell === "O")) setWinner("O");
      if (cells.every((cell) => cell === "X")) setWinner("X");
    });
  };

  //Rey's solution for the loop above

  //   for (let i = 0; i < waysToWin.length; i++) {
  //     if (waysToWin[i].every((cell) => cell === "O")) {
  //       setWinner("O");
  //       break;
  //     } else if (waysToWin[i].every((cell) => cell === "X")) {
  //       setWinner("X");
  //       break;
  //     } else if (i === waysToWin.length - 1) {
  //       checkDraw();
  //     }
  //   }
  // };

  const checkDraw = () => {
    if (board.every((cell) => cell !== "") && winner === null) {
      setWinner("D");
    }
  };
  checkDraw();

  //only call winner when state has changed
  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  };

  return (
    <div className="App">
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
            {winner === "D" ? (
              <h2 className="winner-message">
                <span className={winner}>Draw!</span>
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
    </div>
  );
}

export default TicTacToeTwoPlayers;
