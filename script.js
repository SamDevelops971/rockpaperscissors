console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getCompChoice() {
  let robot = Math.floor(Math.random() * 3);
  switch (robot) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

//Rock as default answer if invalid is entered
function getHumanChoice() {
  let human = prompt("Play rock, paper, or scissors!");
  switch (human.toLowerCase()) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}

let humanWins = 0;
let robotWins = 0;

function playRound() {
  let humanChoice = getHumanChoice();
  let robotChoice = getCompChoice();

  if (
    (humanChoice == "rock" && robotChoice == "scissors") ||
    (humanChoice == "scissors" && robotChoice == "paper") ||
    (humanChoice == "paper" && robotChoice == "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${robotChoice}!`);
    humanWins++;
  } else if (
    (robotChoice == "rock" && humanChoice == "scissors") ||
    (robotChoice == "scissors" && humanChoice == "paper") ||
    (robotChoice == "paper" && humanChoice == "rock")
  ) {
    console.log(`You lose! ${robotChoice} beats ${humanChoice}!`);
    robotWins++;
  } else {
    console.log("It's a tie!");
  }
}

playRound();
playRound();
playRound();
playRound();
playRound();

console.log("Results");
console.log(`Wins: ${humanWins}`);
console.log(`Losses: ${robotWins}`);
