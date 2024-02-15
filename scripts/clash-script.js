function keyboardButtonPress(keyboard) {
    const playerPressed = keyboard.key;
    const homeScreen = document.getElementById('home-screen');
    const playGround = document.getElementById('play-ground');
    const scoreBoard = document.getElementById('scoreboard');

    // Enter Key Functionality to Play the Game from Home & Game Over Screen
    if (playerPressed === 'Enter' &&
        (homeScreen.classList.contains('hidden') === false ||
            scoreBoard.classList.contains('hidden') === false)) {
        play();
    }

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

    else if (playerPressed === 'Enter' &&
        playGround.classList.contains('hidden') === false) {
    }

    else {
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
    hideElementByID('home-screen')
    showElementByID('scoreboard');
    // update final score
    const finalScore = getTextValueById('score-update');
    setTextValueById('final-score', finalScore);

    // clear the last selected key highlight
    const currentAlphabet = getElementTextByID('current-letter')
    removeBgColorById(currentAlphabet);
}