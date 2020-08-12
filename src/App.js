import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";
import PaperScissorsRock from "./components/PaperScissorsRock.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tictactoe" component={TicTacToe} />
        <Route path="/paperscissorsrock" component={PaperScissorsRock} />
      </Switch>
    </Router>
  );
}

export default App;
