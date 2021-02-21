import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";
import RockPaperScissors from "./components/RockPaperScissors.jsx";
import Navbar from "./components/Navbar";
import TicTacToeOnePlayer from "./components/TicTacToeOnePlayer.js";
import TicTacToeTwoPlayers from "./components/TicTacToeTwoPlayers.js";


function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/tictactoe">
              <TicTacToe />
            </Route>
            <Route path='/tictactoe1p'>
              <TicTacToeOnePlayer/>
            </Route>
            <Route path='/tictactoe2p'>
              <TicTacToeTwoPlayers/>
            </Route>
            <Route path="/rockpaperscissors">
              <RockPaperScissors />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
