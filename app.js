//..........................................Initialiging the elemets and variables......................
const newGame = document.querySelector('.newGame');
const rollDice = document.querySelector('.roll_dice');
const hold = document.querySelector('.hold');
const dice = new Array(document.querySelector('.image_1'), document.querySelector('.image_2'))
const player = new Array(document.querySelector('.player_1'), document.querySelector('.player_2'));
const currentScore = new Array(document.querySelector('.cs_number_0'), document.querySelector('.cs_number_1'));
const playerHeading = new Array(document.querySelector('.player_heading_1'), document.querySelector('.player_heading_2'))
const finalScore = new Array(document.querySelector('.final_score_1'), document.querySelector('.final_score_2'));



// initialize variables
//let click = 0;
let score = 0;
let random = new Array(0, 0);
let totalScore = 0
let activePlayer = 0;
let roundScore = new Array(0, 0);
// initializing the eventlisteners

rollDice.addEventListener('click', diceChange);
hold.addEventListener('click', changePlayer);
newGame.addEventListener('click', startNew);



// the functions
function diceChange(e) {


    random[0] = parseInt(Math.floor(Math.random() * 6) + 1);
    random[1] = parseInt(Math.floor(Math.random() * 6) + 1);

    dice[0].src = `images/dice-${random[0]}.png`;
    dice[1].src = `images/dice-${random[1]}.png`;
    score = random[0] + random[1];
    dice[0].style.display = 'block';
    dice[1].style.display = 'block';

    if (random[0] !== 1 && random[1] !== 1) {
        totalScore += score;
        currentScore[activePlayer].textContent = `${totalScore}`;
    }
    else {
        nextPlayer();
    }

    e.preventDefault();
}


function changePlayer() {
    roundScore[activePlayer] += totalScore;
    finalScore[activePlayer].textContent = `${roundScore[activePlayer]}`;
    if (roundScore[activePlayer] >= 100) {
        playerHeading[activePlayer].textContent = 'winner!';
        playerHeading[activePlayer].classList.add('winner');
        playerHeading[activePlayer].classList.remove('active');
        dice[0].style.display = 'none';
        dice[1].style.display = 'none';
        rollDice.disabled = true;
        hold.disabled = true;

    }
    else {
        nextPlayer();
    }

}



function nextPlayer() {

    if (activePlayer === 0) {
        activePlayer = 1;
        currentScore[0].textContent = '0';
        currentScore[1].textContent = '0';
        player[activePlayer].classList.add('active');
        player[activePlayer - 1].classList.remove('active');


    }
    else {
        activePlayer = 0;
        currentScore[0].textContent = '0';
        currentScore[1].textContent = '0';
        player[activePlayer].classList.add('active');
        player[activePlayer + 1].classList.remove('active');

    }
    totalScore = 0;
    dice[0].style.display = 'none';
    dice[1].style.display = 'none';

}

function startNew() {

    window.location.reload();

}

