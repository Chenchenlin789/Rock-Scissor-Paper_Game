//start of the game
let chosenRounds = 5;

const options = document.getElementById("options");
const roundContainer = document.getElementById("round-container");
const roundTotal = document.getElementById("round-total");
const round = document.getElementById("round");

let playerWins = 0;
let computerWins = 0;
let result2 = document.getElementById("result2");

// user choose the rounds
let getRounds = () => {
  if (document.getElementById("opt5").checked) {
    chosenRounds = document.getElementById("opt5").value;
  } else if (document.getElementById("opt10").checked) {
    chosenRounds = Number(document.getElementById("opt10").value);
  } else if (document.getElementById("opt15").checked) {
    chosenRounds = Number(document.getElementById("opt15").value);
  } else if (document.getElementById("opt20").checked) {
    chosenRounds = Number(document.getElementById("opt20").value);
  }
  roundTotal.innerHTML = chosenRounds;
  console.log(chosenRounds);
};

//computer choose a sign
let computerChoiceFunction = () => {
  let computerRandom = Math.floor(Math.random() * 3);
  if (computerRandom == 0) {
    return "rock";
  } else if (computerRandom == 1) {
    return "scissor";
  } else if (computerRandom == 2) {
    return "paper";
  }
};

let counter = 0;

//play the game
function play(playerChoice) {
  roundTotal.innerHTML = chosenRounds;
  round.innerHTML = counter + 1;
  roundContainer.style.display = "block";

  let computerChoice = computerChoiceFunction();
  console.log(computerChoice);

  if (counter < chosenRounds) {
    counter++;
    console.log(counter);

    if (playerChoice == "rock") {
      if (computerChoice == "rock") {
        result.innerHTML = "<section class='colorDraw'>Draw</section>";
      } else if (computerChoice == "scissor") {
        playerWins++;
        result.innerHTML = "<section class='colorWin'>You win</section>";
      } else if (computerChoice == "paper") {
        playerWins--;
        result.innerHTML = "<section class='colorLose'>You lose</section>";
      }
    }

    if (playerChoice == "scissor") {
      if (computerChoice == "rock") {
        result.innerHTML = "<section class='colorLose'>You lose</section>";
      } else if (computerChoice == "scissor") {
        playerWins++;
        result.innerHTML = "<section class='colorDraw'>draw</section>";
      } else if (computerChoice == "paper") {
        playerWins--;
        result.innerHTML = "<section class='colorWin'>You win</section>";
      }
    }

    if (playerChoice == "paper") {
      if (computerChoice == "rock") {
        result.innerHTML = "<section class='colorLose'>You Lose</section>";
      } else if (computerChoice == "scissor") {
        playerWins++;
        result.innerHTML = "<section class='colorDraw'>Draw</section>";
      } else if (computerChoice == "paper") {
        playerWins--;
        result.innerHTML = "<section class='colorWin'>You win</section>";
      }
    }
  }
  console.log(playerWins);
  console.log(computerWins);
  console.log(counter + " / " + chosenRounds);

  if (counter == chosenRounds) {
    result2.style.display = "block";
    if (computerWins > playerWins) {
      result2.innerHTML = "<section class='win'>COMPUTER WINS</section>";
    } else {
      result2.innerHTML = "<section class='lose'>PLAYER WINS</section>";
    }
  } else {
    result2.style.display = "none";
  }
}

function restart() {
  console.log("restart");
  location.reload();
}
