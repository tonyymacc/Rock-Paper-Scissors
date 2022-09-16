let playerScore = 0
let computerScore = 0
let roundCounter = 1

function print(...arg) {
    console.log(...arg)
};


function computerPlay() {
    const index = ['rock', 'paper', 'scissors']
    return index [Math.floor(Math.random() * index.length)]
}

function playRound() {

    const playerSelection = prompt('Rock Paper Scissors... SHOOT!')
    print('Round ' + roundCounter + '...FIGHT!')
    let computerSelection = computerPlay()
    let result = ""

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
        
        playerScore++
        result = 'You win! ' + playerSelection + ' beats ' + computerSelection
    }
    else if (playerSelection === computerSelection) {
        result = 'It\'s a tie. You both chose ' + playerSelection
    }
    else if (playerSelection === 'quit' || 'stop') {
        return
    }
    // else if (playerSelection === null) {
    //     alert('Invalid Input')
    //     return
    // }
    else {
        computerScore++
        result = 'You lose! ' + computerSelection + ' beats ' + playerSelection
    }
    if (playerScore === 3) {
        result = 'You won the game!'
        playerScore = 0
        computerScore = 0
        return
    }
    else if (computerScore === 3) {
        result = 'Opponent won the game!'
        playerScore = 0
        computerScore = 0
        return
    }
    else {
        roundCounter++
        print(result)
        print('Player Score: ' + playerScore + ' |' + ' Opponent Score: ' + computerScore )
    }
    

}

