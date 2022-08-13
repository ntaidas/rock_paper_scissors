
const playSelect = ['rock' , 'paper' , 'scissors']

function computerPlay(){
 return (playSelect[(Math.floor(Math.random() * playSelect.length))])
} 


const win = ('You win!');
const loose = ('You loose!');
const draw = ('It\'s a draw');

const h1 = document.querySelector('h1')
const main = document.getElementById('main')
const rock = document.querySelectorAll('button')[0]
const paper = document.querySelectorAll('button')[1]
const scissors = document.querySelectorAll('button')[2]
let scoreBoard = document.getElementsByClassName('scoreBoard')
let score = document.getElementsByClassName('score')
let playerScore = document.getElementById('playerScore')
let container = document.createElement('div')
container.setAttribute('id', 'gameOver')
container.innerText = 'Abandon all hope'
playerScore.innerText = 0
enemyScore.innerText  = 0
let playerScoreCounter = 0
let enemyScoreCounter = 0

    function gameOver(){
        if (playerScoreCounter == 5){
            h1.innerText = 'You saved the day!'
            paper.removeEventListener('click',playPaper)
            rock.removeEventListener('click', playRock)
            scissors.removeEventListener('click', playScissors)
        }
        if (enemyScoreCounter == 5){
            h1.innerText = 'Abbandon all hope!!!'
            paper.removeEventListener('click',playPaper)
            rock.removeEventListener('click', playRock)
            scissors.removeEventListener('click', playScissors)
        }


    }


 
    function playRock(){
            let computerSelection = computerPlay()
            if(computerSelection == ('paper')){
                h1.innerText = loose
                enemyScore.innerText++
                enemyScoreCounter++
                
            }
            else if (computerSelection == ('scissors')){
                h1.innerText = win
                playerScore.innerText++
                playerScoreCounter++
                gameOver()

                
                
            }
            else {
                h1.innerText = draw
                
            }
            gameOver()
        
    }
    function playPaper(){ 
        let computerSelection = computerPlay()
        if(computerSelection == ('scissors')){
            h1.innerText = loose
            enemyScore.innerText++
            enemyScoreCounter++
            
        }
        else if (computerSelection == ('rock')){
            h1.innerText = win
            playerScore.innerText++
            playerScoreCounter++
        }
        else {
            h1.innerText = draw
        }
        gameOver()
    }
    function playScissors(){
        let computerSelection = computerPlay()
        if(computerSelection == ('rock')){
            h1.innerText = loose
            enemyScore.innerText++
            enemyScoreCounter++
           
        }
        else if (computerSelection == ('paper')){
            h1.innerText = win
            playerScore.innerText++
            playerScoreCounter++
        }
        else {
            h1.innerText = draw
        }
        gameOver()
    }
 

paper.addEventListener('click',playPaper)
rock.addEventListener('click', playRock)
scissors.addEventListener('click', playScissors)





/// plays one round of RPS taking computer and players selection and returns the result
function playRound(playerSelection , computerSelection){
    if ((playerSelection == ('rock') && computerSelection == ('paper')) ||
        (playerSelection == ('scissors') && computerSelection == ('rock')) ||
        (playerSelection == ('paper') && computerSelection == ('scissors')))
       {return loose;}
    else if ((playerSelection == ('rock') && computerSelection == ('scissors')) ||
             (playerSelection == ('scissors') && computerSelection == ('paper')) ||
             (playerSelection == ('paper') && computerSelection == ('rock')))
        {return win}
    else if (playerSelection === computerSelection){
        return draw;}
    else return console.log('invalid option');
}


        
