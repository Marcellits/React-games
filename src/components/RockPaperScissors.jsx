import React, { useState, useEffect } from "react";
import "../styles/rockpaperscissors.css";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import rock from "../images/rock.png";

function RockPaperScissors() {
  const options = ["rock", "paper", "scissors"];
  const [userOption, setUserOption] = useState(null);
  const [computerOption, setComputerOption] = useState(null);
  const [winner, setWinner] = useState(null);

  const random = options[Math.floor(Math.random() * options.length)];

  const rockOption = () => {
    setUserOption("rock");
    setComputerOption(random);
  };
  const paperOption = () => {
    setUserOption("paper");
    setComputerOption(random);
  };
  const scissorsOption = () => {
    setUserOption("scissors");
    setComputerOption(random);
  };

  function result() {
    if (userOption === "rock" && computerOption === "rock") {
      setWinner("draw");
    } else if (userOption === "rock" && computerOption === "paper") {
      setWinner("computer");
    } else if (userOption === "rock" && computerOption === "scissors") {
      setWinner("you");
    } else if (userOption === "paper" && computerOption === "paper") {
      setWinner("draw");
    } else if (userOption === "paper" && computerOption === "scissors") {
      setWinner("computer");
    } else if (userOption === "paper" && computerOption === "rock") {
      setWinner("you");
    } else if (userOption === "scissors" && computerOption === "scissors") {
      setWinner("draw");
    } else if (userOption === "scissors" && computerOption === "rock") {
      setWinner("computer");
    } else if (userOption === "scissors" && computerOption === "paper") {
      setWinner("you");
    }
    console.log(computerOption); //see value of computerOption
  }
  const playAgain = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <h1 className="title">Rock Paper Scissors</h1>
      <div>
        Choose one!
        <div className="container_psr_options">
          <div className="psr_option" onClick={rockOption}>
            <div className="title_psr_option">Rock</div>
            <img src={rock} alt="rock" />
          </div>
          <div className="psr_option" onClick={paperOption}>
            <div className="title_psr_option">Paper</div>
            <img src={paper} alt="paper" />
          </div>
          <div className="psr_option" onClick={scissorsOption}>
            <div className="title_psr_option">Scissors</div>
            <img src={scissors} alt="scissors" />
          </div>
          {userOption && (
            <div className="userOption">
              <div className="option" id={userOption}>
                <div id={`option_${userOption}`}>You pick : {userOption}!</div>
                {winner === null ? (
                  <button onClick={result}>Play!</button>
                ) : (
                  <button onClick={playAgain}>Play Again</button>
                )}
              </div>
            </div>
          )}
          {winner && (
            <div>
              <div>COMPUTER: {computerOption}</div>
            </div>
          )}
          {winner &&
            (winner === "draw" ? (
              <h2 className="winner-message">
                <span className={winner}>Draw!</span>
              </h2>
            ) : (
              <h2 className="winner-message">
                <span className={winner}>{winner}</span> Won!
              </h2>
            ))}
        </div>
      </div>
    </div>
  );
}
export default RockPaperScissors;
