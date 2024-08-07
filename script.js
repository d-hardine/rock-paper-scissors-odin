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

/* function getHumanChoice() {
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
    
} */

function playRound(human, computer) {
    if (human == 'rock') {
        if (computer == 'scissors') {
            console.log('you win! ' + human + ' beats ' + computer);
            humanScore = humanScore + 1;
        }
        else if (computer == 'paper') {
            console.log('you lose! ' + computer + ' beats ' + human);
            computerScore = computerScore + 1;
        }
        else {
            console.log("it's a tie")
        }
    }
    if (human == 'paper') {
        if (computer == 'rock') {
            console.log('you win! ' + human + ' beats ' + computer);
            humanScore = humanScore + 1;
        }
        else if (computer == 'scissors') {
            console.log('you lose! ' + computer + ' beats ' + human);
            computerScore = computerScore + 1;
        }
        else (
            console.log("it's a tie")            
        )
    }
    if (human == 'scissors') {
        if (computer == 'paper') {
            console.log('you win! ' + human + ' beats ' + computer);
            humanScore = humanScore + 1;
        }
        else if (computer == 'rock') {
            console.log('you lose! ' + computer + ' beats ' + human);
            computerScore = computerScore + 1;
        }
        else (
            console.log("it's a tie")            
        )
    }
    return humanScore, computerScore;
}

/*function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
        const human = getHumanChoice();
        const computer = getComputerChoice();
        console.log("Your choice: " + human);
        console.log("Computer choice: " + computer);
        playRound(human, computer);
    }
}*/

let humanScore = 0;
let computerScore = 0;
let fiveRounds = 0;
//playGame();


const containerButton = document.querySelector('.containerButton');

let log = document.createElement('div');
log.classList.add('logs');
containerButton.appendChild(log);

containerButton.addEventListener('click', function(e) {
    if (fiveRounds >= 5) {
        fiveRounds = 0;
        humanScore = 0;
        computerScore = 0;
        containerButton.removeChild(log);
            
        log = document.createElement('div');
        log.classList.add('logs');
        containerButton.appendChild(log);
    }

    fiveRounds = fiveRounds + 1;

    const divRounds = document.createElement('div');
    divRounds.textContent = 'round ' + fiveRounds;
    divRounds.classList.add('rounds');
    log.appendChild(divRounds);
 
    const human = e.target.getAttribute('class');
    const computer = getComputerChoice();
    const divChoices = document.createElement('div');
    divChoices.textContent = "Your choice: " + human + ", Computer choice: " + computer;
    divChoices.classList.add('choices');
    log.appendChild(divChoices);

    playRound(human, computer);

    if (fiveRounds == 5) {
        if (humanScore > computerScore) {
            console.log("your score: " + humanScore + " ,computer score: " + computerScore);
            console.log('You win this 5 rounds!');
            const resultsA = document.createElement('div');
            const resultsB = document.createElement('div');
            resultsA.textContent = "your score: " + humanScore + " ,computer score: " + computerScore;
            resultsB.textContent = 'You win this 5 rounds!';
            resultsA.classList.add('results');
            resultsB.classList.add('results');
            log.appendChild(resultsA);
            log.appendChild(resultsB);

        }
        else {
            console.log("your score: " + humanScore + " ,computer score: " + computerScore);
            console.log('You lose this 5 rounds!');
            const resultsA = document.createElement('div');
            const resultsB = document.createElement('div');
            resultsA.textContent = "your score: " + humanScore + " ,computer score: " + computerScore;
            resultsB.textContent = 'You lose this 5 rounds!';
            resultsA.classList.add('results');
            resultsB.classList.add('results');
            log.appendChild(resultsA);
            log.appendChild(resultsB);
        }
    }
});