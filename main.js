
// number of guesses - determines how many rows of boxes
let numberOfGuesses = 1;
let word = 'as';
let lengthOfWord = word.length;

// container for the letter tiles
let guessTiles = document.getElementById('guess-tiles');
guessTiles.style.display = 'flex';
guessTiles.style.gap = '10px';
guessTiles.style.justifyContent = 'center';
guessTiles.style.alignItems = 'center';

function changeTextToUpper(){
    console.log('upper')
    
}
// creates column of 5 - this represents number of guesses
let inputElements = [];
for (i=0;i<lengthOfWord;i++){
    
     let guessBoxes = document.createElement('input');
     guessBoxes.style.fontSize = '40px';
     guessBoxes.style.textAlign = 'center';
     guessBoxes.style.display = 'flex';
     guessBoxes.style.width = '70px';
     guessBoxes.style.height = '70px';
     guessBoxes.style.border = '2px black solid';
     guessBoxes.style.borderRadius = '4px';
     guessBoxes.style.flex.gap = '0px 1em'
     guessBoxes.setAttribute('type','text');
     guessTiles.appendChild(guessBoxes);  
     inputElements.push(guessBoxes); 
}

// guess button, when clicked it console logs the words in each letter tile
let guessBtn = document.createElement('button');
guessBtn.innerHTML = 'GUESS';
guessBtn.style.height = '50px';
guessBtn.style.border = '2px solid black';
guessBtn.style.borderRadius = '5px';
guessBtn.onclick = function() {onGuessBtnClick()};
guessTiles.appendChild(guessBtn);


function onGuessBtnClick(){
    let guessedWord = '';
    // Collect the values from each input element
    inputElements.forEach(element => {
        guessedWord += element.value;
        for (i=0;i<inputElements.length;i++){
            if (guessedWord == word){
                inputElements[i].style.backgroundColor = '#a2c11c';   
                      
            }
        }      
    });    
}

// dark mode
let darkModeBtn = document.getElementById('dark-mode');
darkModeBtn.onclick = function() {darkModeOn()};
function darkModeOn(){
    let body = document.body;
    body.style.backgroundColor = 'grey';
    body.style.color = 'white';
    let border = document.querySelectorAll('border');
}






   





