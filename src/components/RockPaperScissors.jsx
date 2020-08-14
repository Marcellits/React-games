import React, { useState } from "react";
import "../styles/rockPaperScissors.css";
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
    setTimeout(() => {
      if (userOption === "rock" && computerOption === "rock") {
        setWinner("Draw");
      } else if (userOption === "rock" && computerOption === "paper") {
        setWinner("Computer");
      } else if (userOption === "rock" && computerOption === "scissors") {
        setWinner("You");
      } else if (userOption === "paper" && computerOption === "paper") {
        setWinner("Draw");
      } else if (userOption === "paper" && computerOption === "scissors") {
        setWinner("Computer");
      } else if (userOption === "paper" && computerOption === "rock") {
        setWinner("You");
      } else if (userOption === "scissors" && computerOption === "scissors") {
        setWinner("Draw");
      } else if (userOption === "scissors" && computerOption === "rock") {
        setWinner("Computer");
      } else if (userOption === "scissors" && computerOption === "paper") {
        setWinner("You");
      }
    }, 1000);
  }
  const resetGame = () => {
    setUserOption(null);
    setComputerOption(null);
    setWinner(null);
  };

  return (
    <div>
      <h1 className="title">Rock Paper Scissors</h1>
      <div>
        <div className="container_psr_options">
          <div className="psr_options" onClick={rockOption}>
            <div className="title_psr_option">Rock</div>
            <img className="img-rps" src={rock} alt="rock" />
          </div>
          <div className="psr_options" onClick={paperOption}>
            <div className="title_psr_option">Paper</div>
            <img className="img-rps" src={paper} alt="paper" />
          </div>
          <div className="psr_options" onClick={scissorsOption}>
            <div className="title_psr_option">Scissors</div>
            <img className="img-rps" src={scissors} alt="scissors" />
          </div>
        </div>
        <div className="container_option">
          {userOption === null ? <div className="versus">PICK ONE!</div> : ""}
          {userOption && (
            <div className="userOption option">
              <div className="text_option">YOU</div>
              <div
                className={`invert_user_hand_${userOption}`}
                id={`option_${userOption}`}
              ></div>
            </div>
          )}
          {winner && (
            <div className="computerOption option">
              <div className="text_option"> ROBOT</div>
              <div
                className={`invert_hand_${computerOption}`}
                id={`option_${computerOption}`}
              ></div>
            </div>
          )}
        </div>
        <div>
          <div className="winner_center">
            {winner &&
              (winner === "Draw" ? (
                <h2 className="winner_message_rps">
                  <span className={winner}>Draw!</span>
                </h2>
              ) : (
                <h2 className="winner_message_rps">
                  <span className={winner}>{winner}</span> Won!
                </h2>
              ))}
            {userOption &&
              (winner === null ? (
                <button className="button-rps" onClick={result}>
                  Play!
                </button>
              ) : (
                <button className="button-rps" onClick={resetGame}>
                  Play Again
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RockPaperScissors;
