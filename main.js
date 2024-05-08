// number of guesses - determines how many rows of boxes
let numberOfGuesses = 1;
let word = 'asim';
let lengthOfWord = word.length;


let guessTiles = document.getElementById('guess-tiles');
guessTiles.style.display = 'flex';
guessTiles.style.justifyContent = 'center';


// creates column of 5 - this represents number of guesses
for (i=0;i<numberOfGuesses;i++){
    
    for (j=0;j<lengthOfWord;j++){
        let guessBoxRow = document.createElement('input');
        guessBoxRow.style.display = 'flex';
        guessBoxRow.style.width = '50px';
        guessBoxRow.style.height = '50px';
        guessBoxRow.style.border = '2px black solid';
        guessBoxRow.setAttribute('type','text');
        guessTiles.appendChild(guessBoxRow);  
        
        
    }
}
   





