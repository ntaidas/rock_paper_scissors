
const playSelect = ['rock' , 'paper' , 'scissors']

function computerPlay(){
    ///Math.floor rounds up the number to next integer, Math.random gives random number between 0 and 1
 return (playSelect[(Math.floor(Math.random() * playSelect.length))])
} 
let computerSelection = computerPlay() ;

 const win = ('You win!');
 const loose = ('You loose!');
 const draw = ('It\'s a draw');

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

function game(playRound){
    let yourScore = 0
    let computerScore = 0
    for(let i = 0; i < 5; i++){
        /// takes player input on everyloop and turns playerInput to lower case so that the user selection is not Case sensitive
        let playerSelection = prompt('Rock, Paper or Scissors?', '').toLowerCase();
        console.log(playerSelection)
        computerSelection = computerPlay() ;
        console.log(computerSelection);
        result = playRound(playerSelection, computerSelection);
        if (result == win){
             yourScore += 1
             console.log(win + ' Your score is ' + yourScore);
             if (yourScore === 3){
                 i = 5;
                 alert('Winner Wiener')
                }
        }
        else if (result == loose){
             computerScore +=1;
             console.log(loose + ' Computers score is ' + computerScore);
             if(computerScore === 3){
                 i = 5;
                 alert('Abandon all hope!');
                }
        }
        else if (result == draw){
             i--;
             console.log(draw + ' Try again');
        }     
    }
}
        
game(playRound)