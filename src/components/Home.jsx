import React from "react";
import { Link } from "react-router-dom";
import react_logo from "../images/logo512.png";
import tictactoe_game from "../images/tictactoe-game.png";
import rps_game from "../images/rps-game.png";

function Home() {
  return (
    <div className="App">
      <div className="header">
        <img id="react-logo" src={react_logo} alt="React logo" />
        <h1 className="title_header">Welcome to React Games!</h1>
      </div>

      <div className="container_games">
        <div className="games">
          <Link className="title title_game_home" to="/tictactoe">
            Tic Tac Toe
            <img
              id="tttoe_game"
              src={tictactoe_game}
              alt="Tictactoe game board"
            />
          </Link>
        </div>
        <div className="games">
          <Link className="title title_game_home" to="/paperscissorsrock">
            Paper Scissors Rock
            <img id="rps_game" src={rps_game} alt="Rock paper scissors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
