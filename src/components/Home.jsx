import React from "react";
import { Link } from "react-router-dom";
import react_logo from "../images/logo512.png";
import tictactoe_game from "../images/tictactoe-game.png";
import rps_game from "../images/scissors.png";

function Home() {
  return (
    <div className="App ">
      <img id="react-logo" src={react_logo} alt="React logo" />
      Welcome to React Games!
      <div className="container_games">
        <div className="games">
          <Link className="title" to="/tictactoe">
            Tic Tac Toe
          </Link>
          <img
            id="tttoe_game"
            src={tictactoe_game}
            alt="Tictactoe game board"
          />
        </div>
        <div className="games">
          <Link className="title" to="/paperscissorsrock">
            Paper Scissors Rock
          </Link>
          <img id="rps_game" src={rps_game} alt="Rock paper scissors" />
        </div>
      </div>
    </div>
  );
}

export default Home;
