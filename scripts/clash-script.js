/* 
function play(){
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
}
 */

// reusable function
function hideElementByID(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementByID(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}
function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
}