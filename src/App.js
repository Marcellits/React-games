import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";
import RockPaperScissors from "./components/RockPaperScissors.jsx";
import Navbar from "./components/Navbar";

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
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/paperscissorsrock" component={RockPaperScissors} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
