import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      Welcome to React Games!
      <div>
        <div>
          <Link to="/tictactoe"> Tic Tac Toe</Link>
        </div>
        <div>
          <Link to="paperscissorsrock">Paper Scissors Rock</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
