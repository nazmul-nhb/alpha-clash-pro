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

    // stop game
    if (playerPressed === 'Escape') {
        gameOver();
    }
    else if (playerPressed === 'Backspace') {
        hideElementByID('play-ground');
        hideElementByID('scoreboard');
        showElementByID('home-screen');
    }

    // what key the player is expected to press
    const currentAlphabetElement = document.getElementById('current-letter');
    const currentLetter = currentAlphabetElement.innerText;
    const expectedLetter = currentLetter.toLowerCase();
    // console.log(playerPressed, expectedLetter);

    // check if matched
    if (playerPressed === expectedLetter) {
        // console.log('you got a point');
        /*         
                // update score
                const currentScoreElement = document.getElementById('score-update');
                const currentScoreString = document.getElementById('score-update').innerText;
                const currentScore = parseInt(currentScoreString);
                const updatedScore = currentScore + 1;
                // display score
                currentScoreElement.innerText = updatedScore;
         */
        // -----------------------------------------------------------------------

        const currentScore = getTextValueById('score-update');
        const updatedScore = currentScore + 1;
        // display score
        setTextValueById('score-update', updatedScore);

        // Check for gaining a life after every 10 points
        if (updatedScore % 10 === 0) {
            const currentLife = getTextValueById('life-update');
            const updatedLife = currentLife + 1;
            // display life
            setTextValueById('life-update', updatedLife);
        }

        // start a new round
        removeBgColorById(playerPressed);
        continueGame();
    }
    else {
        // console.log('you missed');
        /*         
                const currentLifeElement = document.getElementById('life-update');
                const currentLifeString = currentLifeElement.innerText;
                const currentLife = parseInt(currentLifeString);
                const updatedLife = currentLife - 1;
                // display life
                currentLifeElement.innerText = updatedLife;
        */
        // setBgColorById(playerPressed);
        const currentLife = getTextValueById('life-update');
        const updatedLife = currentLife - 1;
        // display life
        setTextValueById('life-update', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }
    }
}

// captured keyboard key press
document.addEventListener('keyup', keyboardButtonPress) // callback function


function continueGame() {
    // 1. generate a random alphabet
    const alphabet = getARandomLetter();
    const currentAlphabet = document.getElementById('current-letter');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet); // set background, will add from keypress event
}

function play() {
    // hide everything but playground
    hideElementByID('home-screen');
    hideElementByID('scoreboard');
    showElementByID('play-ground');

    // reset score and life
    setTextValueById('score-update', 0);
    setTextValueById('life-update', 7);

    continueGame();
}

function gameOver() {
    hideElementByID('play-ground');
    showElementByID('scoreboard');
    // update final score
    const finalScore = getTextValueById('score-update');
    setTextValueById('final-score', finalScore);

    // clear the last selected key highlight
    const currentAlphabet = getElementTextByID('current-letter')
    removeBgColorById(currentAlphabet);
}