let playerScore = 0
let computerScore = 0
let roundCounter = 1

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

if (rock) {
    rock.addEventListener('click', () => {
      console.log('btn clicked')
      playerSelection = 'rock'
      console.log('Selection: ' + playerSelection)
      playRound()
    })
  }

  if (paper) {
    paper.addEventListener('click', () => {
      console.log('btn clicked')
      playerSelection = 'paper'
      console.log('Selection: ' + playerSelection)
      playRound()
    })
  }

  if (scissors) {
    scissors.addEventListener('click', () => {
      console.log('btn clicked')
      playerSelection = 'scissors'
      console.log('Selection: ' + playerSelection)
      playRound()
    })
  }

function computerPlay() {
    const index = ['rock', 'paper', 'scissors']
    return index [Math.floor(Math.random() * index.length)]
}

function playRound() {

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
        console.log(result)
        console.log('Player Score: ' + playerScore + ' |' + ' Opponent Score: ' + computerScore )
    }
    

}

