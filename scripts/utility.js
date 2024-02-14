
// reusable function
function hideElementByID(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementByID(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function setBgColorById(id) {
    const element = document.getElementById(id);
    element.classList.add('bg-orange-400');
}

function removeBgColorById(id){
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

function getARandomLetter() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split(''); //creating an alphabet array
    const randomNumber = Math.round(Math.random() * 25);
    const alphabet = alphabets[randomNumber];
    return alphabet;
}