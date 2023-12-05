let playerText = document.getElementById('playerText'); // winner letter, initially just title
let restartBtn = document.getElementById('restartBtn'); // links back to a function that sets characters in array to a null value and sets the above var to title
let boxes = Array.from(document.getElementsByClassName('box')); // initialize an array from the boxes created in the

// establish the vars to be used in the array,a var to track the current player and initialize the array as empty
const playerO = "O";
const playerX = "X";
let currentPlayer = playerX;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));//a listener added to each box in the array running the below function when clicked
};

//when the box is clicked, function runs
function boxClicked(clickEvent) {
    const id = clickEvent.target.id; //reads out the id of the box clicked

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        clickEvent.target.innerText = currentPlayer;

        if (winnerWinnerChickenDinner() !== false) { // checks the conditions of the winnerWinnerChickenDinner function listed later and returns the current player to title
            playerText.innerHTML = `${currentPlayer} has won!`;
            return;
        }

        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    }//first checks to see if the id value in spaces(array) is empty, if it is
    //fill the array with the current id and set the value to current player (initially x)
};


const winningCombos = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function winnerWinnerChickenDinner() {
    for (const condition of winningCombos) { // loop through the winning combos array and set the possible combo to condition
        let [a, b, c] = condition;

        if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {// check if the spaces abc are not empty and contain the same value, if it does, return the values
            return [a, b, c];
        }
    }
    return false;// if no winner is found, return false
};

restartBtn.addEventListener('click', restart);// create restart button

function restart() { // when restart button is clicked, set the spaces array vars to null, set boxes empty and reset title to game title and set x as current player
    spaces.fill(null);

    boxes.forEach(box => {
        box.innerText = '';
    });

    playerText.innerHTML = 'Tic Tac Toe';

    currentPlayer = playerX;
};

startGame();
