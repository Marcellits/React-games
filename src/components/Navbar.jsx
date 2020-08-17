import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        React SuperGames!
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Play
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="rockpaperscissors">
                Rock Paper Scissors
              </a>
              <a class="dropdown-item" href="tictactoe">
                Tic Tac Toe
              </a>
              <a
                class="nav-link disabled"
                href="/snake"
                tabindex="-1"
                aria-disabled="true"
              >
                Snake
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
