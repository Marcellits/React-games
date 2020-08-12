let readlineSync = require("readline-sync");

console.log(
  "\n░░░░░██████▓▓█   ✊      🖐️          🖖      ██████▓▓██░░░░░\n░░░░░██████▓▓█  Rock!   Paper!   Scissors!  ██████▓▓██░░░░░"
);

let user = readlineSync
  .question("\nHey you, what's your name?\n")
  .toUpperCase();
console.log(`I'm really excited to play Rock, Paper and Scissors with you!`);
//Ask user if he/she knows how to play.
howToPlayGame();
function howToPlayGame() {
  let howToPlay = readlineSync.question(
    `\n${user}, do you know how to play it? (Y) or (N)\n`
  );

  howToPlay = howToPlay.toUpperCase();

  if (howToPlay === "Y" || howToPlay === "YES") {
    console.log(`\n░░░░░░░░░█▓▓ Great! Let's play! ▓▓█░░░░░░░░░`);
    letsPlay();
  } else if (howToPlay === "N" || howToPlay === "NO") {
    console.log(
      `\nYou can check the rules here: https://url.gratis/LRdSI\n When you feel confident enough, let's play!`
    );
    letsPlay();
  } else {
    console.log(`!!!! Please, answer (Y) for yes or (N) for no. !!!!`);
    howToPlayGame();
  }
}
// Game functiontionality
function letsPlay() {
  let options = ["R", "P", "S"];
  let randomAnswer = options[Math.floor(Math.random() * options.length)];
  let userAnswer = readlineSync.question(
    `\n${user}, pick one:\n\n(R)OCK! \n(P)APER! \n(S)CISSORS!\n\n`
  );
  userAnswer = userAnswer.toUpperCase();

  if (userAnswer === "R" || userAnswer === "P" || userAnswer === "S") {
    result();
  } else {
    console.log(
      `\nCome on!\nYou're better than this....\n(R) for Rock, (P) for Paper and (S) for Scissors\n`
    );
    letsPlay();
  }

  function result() {
    console.log(
      `\n░░░░░░░░░█▓▓   ${user}: ${userAnswer}   \n░░░░░░░░░█▓▓   COMPUTER: ${randomAnswer}   `
    );
    //CHECKING IF USER ANSWER ROCK
    if (userAnswer === "R" && randomAnswer === "R") {
      setTimeout(() => {
        console.log(`\nWooooow!  O.o\n>>>>> TIE! <<<<<\n\nLet's play again!\n`);
        letsPlay();
      }, 2000);
    } else if (userAnswer === "R" && randomAnswer === "P") {
      setTimeout(() => {
        console.log(
          `\nHaha ಠ‿ಠ \n\n>>>>> YOU LOSE! <<<<<\n💀💀💀💀💀💀💀💀💀💀`
        );
        playAgain();
      }, 2000);
    } else if (userAnswer === "R" && randomAnswer === "S") {
      setTimeout(() => {
        console.log(
          `\n\nOoooohhhh no! ( ˘︹˘ )\n>>>>> YOU WIN! <<<<<\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆\n`
        );
        playAgain();
      }, 2000);
    } else {
      //CHECKING IF USER ANSWER PAPER
      if (userAnswer === "P" && randomAnswer === "P") {
        setTimeout(() => {
          console.log(
            `\nWooooow!  O.o\n>>>>> TIE! <<<<<\n\nLet's play again!\n`
          );
          letsPlay();
        }, 2000);
      } else if (userAnswer === "P" && randomAnswer === "S") {
        setTimeout(() => {
          console.log(
            `\nHaha  ಠ‿ಠ\n\n>>>>> YOU LOSE! <<<<<\n💀💀💀💀💀💀💀💀💀💀`
          );
          playAgain();
        }, 2000);
      } else if (userAnswer === "P" && randomAnswer === "R") {
        setTimeout(() => {
          console.log(
            `\n\nOoooohhhh no! ( ˘︹˘ )\n>>>>> YOU WIN! <<<<<\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆\n`
          );
          playAgain();
        }, 2000);
      } else {
        //CHECKING IF USER ANSWER SCISSORS
        if (userAnswer === "S" && randomAnswer === "S") {
          setTimeout(() => {
            console.log(
              `\nWooooow!  O.o\n>>>>> TIE! <<<<<\n\nLet's play again!\n`
            );
            letsPlay();
          }, 2000);
        } else if (userAnswer === "S" && randomAnswer === "R") {
          setTimeout(() => {
            console.log(
              `\nHaha  ಠ‿ಠ\n\n>>>>> YOU LOSE! <<<<<\n💀💀💀💀💀💀💀💀💀💀`
            );
            playAgain();
          }, 2000);
        } else {
          setTimeout(() => {
            console.log(
              `\nOoooohhhh no! ( ˘︹˘ )\n>>>>> YOU WIN! <<<<<\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆\n`
            );
            playAgain();
          }, 2000);
        }
      }
    }
  }
}

function playAgain() {
  let again = readlineSync
    .question(`\nWould you like to play again? (Y) or (N)\n`)
    .toUpperCase();

  if (again === "Y" || again === "YES") {
    console.log(`\n░░░░░░░░░█▓▓ Great! Let's play! ▓▓█░░░░░░░░░`);
    letsPlay();
  } else if (again === "N" || again === "NO") {
    console.log(`\nOk ${user}.Thanks for playing! See Ya!`);
  } else {
    console.log(`!!!! Please, answer (Y) for yes or (N) for no. !!!!`);
    playAgain();
  }
}
