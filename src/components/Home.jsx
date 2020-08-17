import React from "react";
import { Link } from "react-router-dom";
import react_logo from "../images/reactLogo.png";
import tictactoe_game from "../images/tictactoe-game.png";
import rps_game from "../images/rps-game.png";

function Home() {
  return (
    <div className="App">
      <div className="header">
        <img id="react-logo" src={react_logo} alt="React logo" />
        <h1 className="title_header">Welcome to React SuperGames!</h1>
      </div>

      <div className="container_games">
        <div className="games">
          <Link className="title_game_home" to="/tictactoe">
            <h2>Tic Tac Toe</h2>
            <img
              id="tttoe_game"
              src={tictactoe_game}
              alt="Tictactoe game board"
            />
          </Link>
        </div>
        <div className="games">
          <Link className=" title_game_home" to="/rockpaperscissors">
            <h2>Rock Paper Scissors </h2>

            <img id="rps_game" src={rps_game} alt="Rock paper scissors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
