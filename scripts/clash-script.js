/* 
function play(){
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
}
 */
function keyboardButtonPress(keyboard) {
    const playerPressed = keyboard.key;
    // console.log('player pressed', playerPressed);

    // what key the player is expected to press
    const currentAlphabetElement = document.getElementById('current-letter');
    const currentLetter = currentAlphabetElement.innerText;
    const expectedLetter = currentLetter.toLowerCase();
    console.log(playerPressed, expectedLetter);

    // check if matched
    if (playerPressed === expectedLetter) {
        // console.log('you got a point');
        // update score
        const currentScoreElement = document.getElementById('score-update');
        const currentScoreString = document.getElementById('score-update').innerText;
        const currentScore = parseInt(currentScoreString);
        const updatedScore = currentScore + 1;
        // display score
        currentScoreElement.innerText = updatedScore;
        // start a new round
        removeBgColorById(playerPressed);
        continueGame();
    }
    else {
        // console.log('you missed');
        const currentLifeElement = document.getElementById('life-update');
        const currentLifeString = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeString);
        const updatedLife = currentLife - 1;
        // display life
        currentLifeElement.innerText = updatedLife;
    }
}
// captured keyboard key press
document.addEventListener('keyup', keyboardButtonPress) // callback function


function continueGame() {
    // 1. generate a random alphabet
    const alphabet = getARandomLetter();
    const currentAlphabet = document.getElementById('current-letter');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}

function play() {
    hideElementByID('home-screen');
    showElementByID('play-ground');
    continueGame();
}

