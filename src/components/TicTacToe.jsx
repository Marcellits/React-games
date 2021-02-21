import React from "react";
import "../styles/TTT.css";
import { Link } from "react-router-dom";

function TicTacToe() {
  return (
    <div className="App">
      <div>
        <h1 className="title">Tic Tac Toe</h1>
        <div>
          <button> 
            <Link to="/tictactoe1p">
            1 Player
            </Link>
            
          </button>
          <br />
          <br />
          <button >
          <Link to="/tictactoe2p">
          2 Players
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
