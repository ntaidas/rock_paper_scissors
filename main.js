
const playSelect = ['rock' , 'paper' , 'scissors']

function computerPlay(){
    ///Math.floor rounds up the number to next integer, Math.random gives random number between 0 and 1
 return (playSelect[(Math.floor(Math.random() * playSelect.length))])
} 
let computerSelection = computerPlay() ;

 const win = ('You win!');
 const loose = ('You loose!');
 const draw = ('It\'s a draw');

 let buttons = document.querySelectorAll('button')
 let rock = document.querySelectorAll('button')[0]
 


rock.addEventListener('click', clickTest)
 

 function clickTest(){
    console.log('1')
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

let yourScore = 0
let computerScore = 0
        
