function getComputerChoice() {
    computerNumber = Math.floor(Math.random() * 3);
    computerChoice = '';
    if (computerNumber === 0) {
        computerChoice = 'rock';
    }
    else if (computerNumber === 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function getHumanChoice() {
    let i = 0;
    while (i < 1) {
        let humanChoice = prompt("Rock, paper, or scissors?:");
        if (humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors') {
            alert("okay, next step.");
            i = i + 1;
            return humanChoice.toLowerCase();
        }
        else {
            alert("invalid prompt, please try again.");
        }
    }
    
}

function playRound(human, computer) {
    if (human == 'rock') {
        if (computer == 'scissors') {
            console.log('you win! ' + human + ' beats ' + computer);
            humanScore = humanScore + 1;
            //return humanScore;
        }
        else if (computer == 'paper') {
            console.log('you lose! ' + computer + ' beats ' + human);
            computerScore = computerScore + 1;
            //return computerScore;
        }
        else {
            console.log("it's a tie")
        }
    }
    if (human == 'paper') {
        if (computer == 'rock') {
            console.log('you win! ' + human + ' beats ' + computer);
            humanScore = humanScore + 1;
            //return humanScore;
        }
        else if (computer == 'scissors') {
            console.log('you lose! ' + computer + ' beats ' + human);
            computerScore = computerScore + 1;
            //return computerScore;
        }
        else (
            console.log("it's a tie")            
        )
    }
    if (human == 'scissors') {
        if (computer == 'paper') {
            console.log('you win! ' + human + ' beats ' + computer);
            humanScore = humanScore + 1;
            //return humanScore;
        }
        else if (computer == 'rock') {
            console.log('you lose! ' + computer + ' beats ' + human);
            computerScore = computerScore + 1;
            //return computerScore;
        }
        else (
            console.log("it's a tie")            
        )
    }
    console.log("your score: " + humanScore + " ,computer score: " + computerScore);
    return humanScore, computerScore;
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
        const human = getHumanChoice();
        const computer = getComputerChoice();
        console.log("Your choice: " + human);
        console.log("Computer choice: " + computer);
        playRound(human, computer);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();