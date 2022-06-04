/// All possible plays put in to an array
const playSelect = ['rock' , 'paper' , 'scissors']

/// Function for computer to select a random play
function computerPlay(){
    ///Math.floor rounds up the number to next integer, Math.random gives random number between 0 and 1
 return (playSelect[(Math.floor(Math.random() * playSelect.length))])
} 

/// variables for faster coding
 const win = ('You win!');
 const loose = ('You loose!');
 const draw = ('It\'s a draw');

/// plays one round of RPS taking computer and players selection and returns the result
function playRound(playerSelection , computerSelection){
    /// checks if player had a loosing hand, if so returns loose
    if ((playerSelection == ('rock') && computerSelection == ('paper')) || (playerSelection == ('scissors') && computerSelection == ('rock')) ||  (playerSelection == ('paper') && computerSelection == ('scissors'))){
        return loose;
    /// checks if player had a winning hand, if so returns win
    }else if ((playerSelection == ('rock') && computerSelection == ('scissors')) || (playerSelection == ('scissors') && computerSelection == ('paper')) || (playerSelection == ('paper') && computerSelection == ('rock'))){
        return win
        ///checks if the player and computer selected the same hand, if so returns draw.
    }else if (playerSelection === computerSelection){
        return draw;
        /// at all other scenarios returns invalid option
    }else return console.log('invalid option');
}

/// takes player input and turns playerInput to lower case so that the user selection is not Case sensitive

/// computer selection is random answer from computerPlay
let computerSelection = computerPlay() ;

//
function game(playRound){
    let yourScore = 0
    let computerScore = 0
    for(let i = 0; i < 5; i++){
        /// takes player input on everyloop and turns playerInput to lower case so that the user selection is not Case sensitive
        let playerSelection = prompt('Rock, Paper or Scissors?', '').toLowerCase();
        console.log(playerSelection)
        /// on every loop calls computerPlay to get a random hand and stores it in computerSelection
        computerSelection = computerPlay() ;
        console.log(computerSelection);
        /// on every loop calls playround with new playerSelection and computerSelection parameters and stores them in the result
        result = playRound(playerSelection, computerSelection);
        /// if result is win then adds one point to your score
        if (result == win){
             yourScore += 1
             console.log(win + ' Your score is ' + yourScore);
             ///when you get 3 points loop stops
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
        /// if it's a draw takes 1 away from the counter and runs the loop again
        else if (result == draw){
             i--;
             console.log(draw + ' Try again');
        }     
    }
}
        

    


game(playRound)