/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// 1. Core Game Variables
//      A. Players' Global Scores
//          * Option 1:
//              var player1Score, player2Score
//          * Option 2:
//              var playersScores = [43, 72];
//              // Update player 1 score
//              playersScores[0] = 45           => playersScores[activePlayer] = 45
//              // Update player 2 score
//              playersScores[1] = 75
//      B. Round variable: number
//      C. activePlayer: 0, 1
//      D. Dice value

var playersScores = [0,0]
var roundScores = 0;
var activePlayer = 0;
var diceNumber;

// Reset both players' global score and round scores
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// Optional variable declariation method
// var playersScores, roundScores, activePlayer, diceNumber

// diceNumber = Math.ceil(Math.random() * 6);
// diceNumber2 = Math.ceil(Math.random() * 6);

// document.querySelector("#current-0").textContent => Read the content in "id=current-0"
// document.querySelector("#current-0").textContent = diceNumber;
// document.querySelector("#current-1").textContent = diceNumber2;

// Events
//  1. How to setup event handler (event listener)
//  2. Callback function
//  3. Anonymous function

// 1. Setup event listener
function getDice() {
    //Do something
}

getDice()

// switchPlayer() - Perform switch player steps:
function switchPlayer(){
    // // 1. Reset activePlayer's round score to 0
        roundScores = 0;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScores;  

        // // 2. Remove the activePlayer UI presentation: red dot and bold text
        // // first remove the 'active' attribute for the current active player
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
      
        // // 3. Change the activePlayer to the other player
        // if diceNumber ==1, then ...
        // // Ternary operator
        // // [evaluation] ? (if (true) block) : (else block)
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
}


// Callback function example: No ()
//document.querySelector(".btn-roll").addEventListener('click', getDice)

// 3. Anonymous function
// Event listener has 2 parameters: user action, function you want to execute when the action happens
document.querySelector(".btn-roll").addEventListener('click', function() {
    // 1. Generate a random number
    diceNumber = Math.ceil(Math.random() * 6);

    document.querySelector('.dice').src = `./dice-${diceNumber}.png`;
    
    if(diceNumber == 1) {
        switchPlayer();        
    } else {
        // if diceNumber != (not equal) 1, then ...
        
        // 1. Update the round score for the active player
            // if activePlayer = 0
            // #current-${activePlayer} = current-0
            // if activePlayer = 1
            // #current-${activePlayer} = current-1
        roundScores = roundScores + diceNumber;

        // 2. Update the activePlayer's current score
        document.querySelector(`#current-${activePlayer}`).textContent = roundScores;        
    }   
});

// Event listener for the 'Hold button'
// Things we completed:
//  1. Add the current score to the active player's global scrore
//  2. Reset activePlayer's round score to 0
//  3. Remove the activePlayer UI presentation: red dot and bold text
//  4. Change the activePlayer to the other player
// Things we need to do:
//  1. Check if the player won the game
//  2. If yes, display win message
//  3. If not, switch to next player
document.querySelector(".btn-hold").addEventListener('click', function() {

    //score-0 score-1
    // 1. Add the current score to the active player's global scrore
        // Player's global score is saved at playersScores[]
        // If activePlayer = 0 
        // playersScores[activePlayer] = playersScores[0]
        // If activePlayer = 1 
        // playersScores[activePlayer] = playersScores[1]
    playersScores[activePlayer] = playersScores[activePlayer] + roundScores
    document.querySelector(`#score-${activePlayer}`).textContent = playersScores[activePlayer];
    roundScores = 0;

    // 2. Reset activePlayer's round score to 0
    roundScores = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScores;  

    // 5. Check if the player won the game
    // Using playersScores[]
    if(playersScores[activePlayer] >= 20) {
        document.querySelector(`#name-${activePlayer}`).textContent = "Winner!";
        document.querySelector('.dice').style.display = "none";
        document.querySelector('.btn-roll').style.display = "none";
        document.querySelector('.btn-hold').style.display = "none";
    }
    else {
        // switch player
        switchPlayer();
        // 3. Remove the activePlayer UI presentation: red dot and bold text
        // first remove the 'active' attribute for the current active player
        //document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
      
        // 4. Change the activePlayer to the other player

        //activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        
        //document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    }
});

/**
 * Reset game status to start a new game
 */
function newGame() {
    // Remove activePlayer active status
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');

    // Update local variables
    playersScores = [0,0]
    roundScores = 0;
    activePlayer = 0;
    diceNumber;

    // Update HTML elements
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    // Update player HTML textContent from Winner to Player 1, Player 2 (SEE line 132)
    // ${} literals template "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
    document.querySelector(`#name-0`).textContent = "Player1";
    document.querySelector(`#name-1`).textContent = "Player2";

    // Update classList to activePlayer active (SEE line 148)
    document.querySelector(`.player-0-panel`).classList.add('active');

    // Make visible buttons
    document.querySelector('.dice').style.display = "inline";
    document.querySelector('.btn-roll').style.display = "inline";
    document.querySelector('.btn-hold').style.display = "inline";
}

document.querySelector('.btn-new').addEventListener("click", function() {
    newGame();
});