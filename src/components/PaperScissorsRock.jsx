import React, { useState } from "react";

function PaperScissorsRock() {
  const options = ["R", "P", "S"];
  const [userOption, setUserOption] = useState(null);
  const [winner, setWinner] = useState(null);

  return <div>Paper Scissors Rock!</div>;
}
export default PaperScissorsRock;
