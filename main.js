
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
enemyScore.innerText = 0
let games = 0

 
    function playRock(){
            let computerSelection = computerPlay()
            if(computerSelection == ('paper')){
                enemyScore.innerText++
                
            }
            else if (computerSelection == ('scissors')){
                playerScore.innerText++
                
            }
            else {
                console.log(draw)
                
            }
        
    }
    function playPaper(){ 
        let computerSelection = computerPlay()
        if(computerSelection == ('scissors')){
            enemyScore.innerText++
            
        }
        else if (computerSelection == ('rock')){
            playerScore.innerText++
           
        }
        else {
            console.log(draw)
            games--
        }
    }
    function playScissors(){
        let computerSelection = computerPlay()
        if(computerSelection == ('rock')){
            enemyScore.innerText++
           
        }
        else if (computerSelection == ('paper')){
            playerScore.innerText++
            
        }
        else {
            console.log(draw)
            games--
        }
    }
 

let plays =[playRock, playPaper, playScissors]

paper.addEventListener('click',playPaper)
rock.addEventListener('click', playRock)
scissors.addEventListener('click', playScissors)


if(playerScore.innerText == '5' || enemyScore.innerText == '5'){
    h1.innerText = 'Game Over'
}


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


        
