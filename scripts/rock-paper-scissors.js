const WIN = 1, TIE = 0, LOSS = -1;
const ROCK = 'rock', PAPER = 'paper', SCISSORS = 'scissors';
const CHOICES = [ROCK, PAPER, SCISSORS];

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";

    if (playerSelection == ROCK && computerSelection == SCISSORS ||
        playerSelection == SCISSORS && computerSelection == PAPER ||
        playerSelection == PAPER && computerSelection == ROCK) {
        /* Player won. */
        playerScore += 1;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + '<br><br>Player score: ' + playerScore + '<br>Computer Score: ' + computerScore);

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again';
            disableButtons();
        }
    } else if (playerSelection == computerSelection) {
        /* A tie. */
        result = ('It\'s a tie. You both chose ' + playerSelection
            + '<br><br>Player score: ' + playerScore + '<br>Computer Score: ' + computerScore);
    } else {
        /* Player lost. */
        computerScore += 1;
        result = ('You lose! ' + computerSelection + 'beats ' + playerSelection
            + '<br><br>Player score: ' + playerScore + '<br>Computer Score: ' + computerScore);

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    });
});