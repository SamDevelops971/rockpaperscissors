console.log("Hello World");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let scoreboard = document.getElementById("score");
let result = document.getElementById("winMessage");


let humanChoice = "";



function getCompChoice() {
  let robot = Math.floor(Math.random() * 3);
  switch (robot) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}



//Rock as default answer if invalid is entered
function rockChoice() {
  playRound("Rock");
}

function paperChoice() {
  playRound("Paper");
}

function scissorsChoice() {
  playRound("Scissors");
}


let humanWins = 0;
let robotWins = 0;

function playRound(humanChoice) {
  let robotChoice = getCompChoice();

  if (
    (humanChoice == "Rock" && robotChoice == "Scissors") ||
    (humanChoice == "Scissors" && robotChoice == "Paper") ||
    (humanChoice == "Paper" && robotChoice == "Rock")
  ) {
    result.innerHTML = `${humanChoice} beats ${robotChoice}! You Win!`;
    humanWins++;
    scoreboard.innerHTML = `${humanWins} : ${robotWins}`;
  } else if (
    (robotChoice == "Rock" && humanChoice == "Scissors") ||
    (robotChoice == "Scissors" && humanChoice == "Paper") ||
    (robotChoice == "Paper" && humanChoice == "Rock")
  ) {
    result.innerHTML = `${robotChoice} beats ${humanChoice}! You lose...`;
    robotWins++;
    scoreboard.innerHTML = `${humanWins} : ${robotWins}`;
  } else {
    result.innerHTML = "It's a tie!"
  }
}

rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);


