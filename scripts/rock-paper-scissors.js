const WIN = 1, TIE = 0, LOSS = -1;
const ROCK = 'rock', PAPER = 'paper', SCISSORS = 'scissors';
const CHOICES = [ROCK, PAPER, SCISSORS];

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == ROCK && computerSelection == SCISSORS ||
        playerSelection == SCISSORS && computerSelection == PAPER ||
        playerSelection == PAPER && computerSelection == ROCK) {
        /* Player won. */
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
        return WIN;
    } else if (playerSelection == computerSelection) {
        /* A tie. */
        console.log('It\'s a tie. You both chose ' + playerSelection);
        return TIE;
    }
    /* Player lost. */
    console.log('You lose! ' + computerSelection + 'beats ' + playerSelection);
    return LOSS;
}

function game(roundsTotal = 5) {
    let roundsPlayed = 0;
    let playerScore = 0;

    /* Play rounds */
    while (roundsPlayed < roundsTotal) {
        let playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
        if (playerSelection != ROCK  && 
            playerSelection != PAPER && 
            playerSelection != SCISSORS) {
            continue;
        }

        let roundResult = playRound(playerSelection, computerPlay());
        if (roundResult == TIE) continue;   // don't count the tie round.
        else if (roundResult == WIN) playerScore++;
        roundsPlayed++;
    }

    /* Game result */
    if (playerScore > roundsPlayed / 2) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You win!');
    } else if (playerScore == roundsPlayed / 2) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You tied!');
    } else {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You lost!');
    }
}
