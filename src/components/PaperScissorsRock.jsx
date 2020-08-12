import React, { useState } from "react";
import "../styles/paperscissorsrock.css";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import rock from "../images/rock.png";

function PaperScissorsRock() {
  const options = ["R", "P", "S"];
  const [userOption, setUserOption] = useState(null);
  const [winner, setWinner] = useState(null);

  let randomOption = options[Math.floor(Math.random() * options.length)];
  return (
    <div>
      Paper Scissors Rock!
      <div>
        Choose one!
        <div className="container_psr_options">
          <div className="psr_option" id="paper">
            <div>Paper</div>
            <img src={paper} alt="paper" />
          </div>
          <div className="psr_option" id="scissors">
            <div>Scissors</div>
            <img src={scissors} alt="scissors" />
          </div>
          <div className="psr_option" id="rock">
            <div>Rock</div>
            <img src={rock} alt="rock" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaperScissorsRock;
