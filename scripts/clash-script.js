/* 
function play(){
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
}
 */

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

