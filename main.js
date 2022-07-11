
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
let paper = document.querySelectorAll('button')[1]
let scissors = document.querySelectorAll('button')[2]


rock.addEventListener('click', clickTest)
 
function playPaper(){
    computerPlay()
    if(computerSelection == ('scissors'))
    {console.log(loose);}
    else if (computerSelection == ('rock')){
        console.log(win);
    }
    else console.log(draw)
}

paper.addEventListener('click',playPaper)


for(i = 0; i <= buttons.length -1; i++){
    buttons[i].addEventListener('click', clickTest)
}
function clickTest(){
    console.log('namas')
    
}

function clickTest1(){
    console.log('papas')
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
        
