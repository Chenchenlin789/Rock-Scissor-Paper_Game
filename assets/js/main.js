//start of the game
let choosenRounds = 5;

const options = document.getElementById('options')
const roundContainer = document.getElementById('round-container')
const roundTotal = document.getElementById('round-total')
const round = document.getElementById('round')

// user choose the rounds 
let getRounds =() => {
 if (document.getElementById("opt5").checked) {
     chosenRounds= document.getElementById("opt5").value
 } else if (document.getElementById("opt10").checked){
    chosenRounds= Number(document.getElementById("opt10").value)
 }  else if (document.getElementById("opt15").checked) {
    chosenRounds= Number(document.getElementById("opt5").value)
} else if (document.getElementById("opt20").checked){
   chosenRounds=Number(document.getElementById("opt20").value)
} 
console.log(chosenRounds)
}

//computer choose a sign
let computerChoiceFunction = () => {
    let computerRandom = Math.floor(Math.random() * 3)
    if (computerRandom == 0){
        return "rock"
    }else if (computerRandom == 1){
        return "scissor"
    }else if(computerRandom == 2){
        return "paper"
    }
}

let counter = 1


//play the game
function play(playerChoice) {
    roundTotal.innerHTML = getRounds()
    round.innerHTML = counter
    roundContainer.style.display = "block"

    let computerChoice = computerChoiceFunction()
console.log(computerChoice)

    if (chosenRounds>0) {
        chosenRounds--

        

        if (playerChoice=='rock'){
    
            if (computerChoice=='rock') {
                result.innerHTML ="<section class='colorDraw'>DRAW</section>"
            } else if (computerChoice = 1) {
                result.innerHTML ="<section class='colorWin'>YOU WIN</section>"
            }else if (computerChoice = 2) {
                result.innerHTML ="<section class='colorLose'>YOU LOSE</section>"
            }   
        }   

        if (playerChoice =='scissor')  {
          
            if (computerChoice=='rock') {
                result.innerHTML ="<section class='colorLose'>YOU LOSE</section>"
            } else if (computerChoice =='scissor') {
                result.innerHTML ="<section class='colorDraw'>DRAW</section>"
            }else if (computerChoice == 'paper') {
                result.innerHTML ="<section class='colorWin'>YOU WIN</section>"
            }   
        }

        if (playerChoice == 'paper') {
          
            if (computerChoice=='rock') {
                result.innerHTML ="<section class='colorLose'>YOU LOSE</section>"
            } else if (computerChoice =='scissor') {
                result.innerHTML ="<section class='colorDraw'>DRAW</section>"
            }else if (computerChoice =='paper') {
                result.innerHTML ="<section class='colorWin'>YOU WIN</section>"
            }      
        }
    }
}

function restart() {
    console.log('restart')
    location.reload();
}