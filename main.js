// number of guesses - determines how many rows of boxes
let numberOfGuesses = 1;
let word = 'five';
let lengthOfWord = word.length;

// container for the letter tiles
let guessTiles = document.getElementById('guess-tiles');
guessTiles.style.display = 'flex';
guessTiles.style.gap = '10px';
guessTiles.style.justifyContent = 'center';
guessTiles.style.alignItems = 'center';

// creates column of 5 - this represents number of guesses
let inputElements = [];
for (i=0;i<lengthOfWord;i++){
    
     let guessBoxRow = document.createElement('input');
     guessBoxRow.style.display = 'flex';
     guessBoxRow.style.width = '70px';
     guessBoxRow.style.height = '70px';
     guessBoxRow.style.border = '2px black solid';
     guessBoxRow.style.borderRadius = '4px';
     guessBoxRow.style.flex.gap = '0px 1em'
     guessBoxRow.setAttribute('type','text');
     guessTiles.appendChild(guessBoxRow);  

     inputElements.push(guessBoxRow);
     
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
    inputElements.forEach(input => {
        guessedWord += input.value;
    });
    if (guessedWord == word){
        console.log('you win');
    }
}






   





