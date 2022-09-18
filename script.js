let playerScore = 0
let computerScore = 0
let roundCounter = 1

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

if (rock) {
    rock.addEventListener('click', () => {
      console.log('btn clicked')
      playerSelection = 'Rock'
      console.log('Selection: ' + playerSelection)
      playRound()
    })
  }

  if (paper) {
    paper.addEventListener('click', () => {
      console.log('btn clicked')
      playerSelection = 'Paper'
      console.log('Selection: ' + playerSelection)
      playRound()
    })
  }

  if (scissors) {
    scissors.addEventListener('click', () => {
      console.log('btn clicked')
      playerSelection = 'Scissors'
      console.log('Selection: ' + playerSelection)
      playRound()
    })
  }

function computerPlay() {
    const index = ['Rock', 'Paper', 'sScissors']
    return index [Math.floor(Math.random() * index.length)]
}

function playRound() {

    // console.log('Round ' + roundCounter + '...FIGHT!')
    let computerSelection = computerPlay()
    let result = ""

    if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock') {
        
        playerScore++
        result = 'You win! ' + playerSelection + ' beats ' + computerSelection
        document.querySelector('.result').innerHTML = result

    }
    else if (playerSelection === computerSelection) {
        result = 'It\'s a tie. You both chose ' + playerSelection
        document.querySelector('.result').innerHTML = result

    }
    else {
        computerScore++
        result = 'You lose! ' + computerSelection + ' beats ' + playerSelection
        document.querySelector('.result').innerHTML = result
    }

    if (playerScore === 5) {
        result = 'You won the game!'
        document.querySelector('.result').innerHTML = result
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore === 5) {
        result = 'Opponent won the game!'
        document.querySelector('.result').innerHTML = result
        playerScore = 0
        computerScore = 0
        document.querySelector('.player-score').innerHTML = playerScore
        document.querySelector('.computer-score').innerHTML = computerScore
    }
    else {
        // roundCounter++
        document.querySelector('.player-score').innerHTML = playerScore
        document.querySelector('.computer-score').innerHTML = computerScore
        console.log(result)
        console.log('Player Score: ' + playerScore + ' |' + ' Opponent Score: ' + computerScore )
    }
    

}

