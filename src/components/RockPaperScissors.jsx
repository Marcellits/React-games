import React, { useState } from "react";
import "../styles/rockpaperscissors.css";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import rock from "../images/rock.png";

function RockPaperScissors() {
  const options = ["rock", "paper", "scissors"];
  const [userOption, setUserOption] = useState(null);
  const [winner, setWinner] = useState(null);
  let randomOption = options[Math.floor(Math.random() * options.length)];

  const rockOption = () => {
    setUserOption("rock");
  };
  const paperOption = () => {
    setUserOption("rock");
  };
  const scissorsOption = () => {
    setUserOption("rock");
  };

  function result() {
    //CHECKING IF USER ANSWER ROCK
    if (setUserOption === "rock" && randomOption === "rock") {
      console.log(`\nWooooow!  O.o\n>>>>> TIE! <<<<<\n\nLet's play again!\n`);
    } else if (setUserOption === "rock" && randomOption === "paper") {
      console.log(`\nHaha ಠ‿ಠ \n\n>>>>> YOU LOSE! <<<<<\n💀💀💀💀💀💀💀💀💀💀`);
    } else if (setUserOption === "rock" && randomOption === "scissors") {
      console.log(
        `\n\nOoooohhhh no! ( ˘︹˘ )\n>>>>> YOU WIN! <<<<<\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆\n`
      );
    } else {
      //CHECKING IF USER ANSWER PAPER
      if (setUserOption === "paper" && randomOption === "paper") {
        console.log(`\nWooooow!  O.o\n>>>>> TIE! <<<<<\n\nLet's play again!\n`);
      } else if (setUserOption === "paper" && randomOption === "scissors") {
        console.log(
          `\nHaha  ಠ‿ಠ\n\n>>>>> YOU LOSE! <<<<<\n💀💀💀💀💀💀💀💀💀💀`
        );
      } else if (setUserOption === "paper" && randomOption === "rock") {
        console.log(
          `\n\nOoooohhhh no! ( ˘︹˘ )\n>>>>> YOU WIN! <<<<<\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆\n`
        );
      } else {
        //CHECKING IF USER ANSWER SCISSORS
        if (setUserOption === "scissors" && randomOption === "scissors") {
          console.log(
            `\nWooooow!  O.o\n>>>>> TIE! <<<<<\n\nLet's play again!\n`
          );
        } else if (setUserOption === "scissors" && randomOption === "rock") {
          console.log(
            `\nHaha  ಠ‿ಠ\n\n>>>>> YOU LOSE! <<<<<\n💀💀💀💀💀💀💀💀💀💀`
          );
        } else {
          console.log(
            `\nOoooohhhh no! ( ˘︹˘ )\n>>>>> YOU WIN! <<<<<\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆\n`
          );
        }
      }
    }
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
                <button onClick={result}>Play!</button>
              </div>
            </div>
          )}
          {result && (
            <div>
              <div>COMPUTER: {randomOption}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default RockPaperScissors;
