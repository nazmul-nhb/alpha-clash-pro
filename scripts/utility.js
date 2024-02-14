
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

function removeBgColorById(id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

function getTextValueById(id) {
    const element = document.getElementById(id);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

function setTextValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

function getElementTextByID(id){
    const element = document.getElementById(id);
    const text = element.innerText;
    return text;
}

function getARandomLetter() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split(''); //creating an alphabet array
    const randomNumber = Math.round(Math.random() * 25);
    const alphabet = alphabets[randomNumber];
    return alphabet;
}