
// number of guesses - determines how many rows of boxes
let word = ['l','o','l','l','l'];
let lengthOfWord = word.length;
let numberOfGuesses = document.querySelector('.num-of-guesses-field');
let numberOfGuessesBtn = document.querySelector('.num-of-guesses-btn');

// container for the letter tiles
let guessBoxContainer = document.getElementById('guess-tiles');
guessBoxContainer.style.display = 'flex';
guessBoxContainer.style.flexDirection = 'column';
guessBoxContainer.style.gap = '10px';
guessBoxContainer.style.justifyContent = 'center';
guessBoxContainer.style.alignItems = 'center';

// creates column of word length - this represents number of guesses
let inputElements = [];
let guessTilesElements = [];
for (j=0; j<5; j++){
    let rowContainer = document.createElement('div');
    rowContainer.style.display = 'flex';
    rowContainer.style.flexWrap = 'wrap';
    rowContainer.style.gap = '10px';
    rowContainer.style.justifyContent = 'center';
    rowContainer.style.alignItems = 'center';
    guessTilesElements.push(rowContainer);
    guessBoxContainer.appendChild(rowContainer);  // append each row to the main container
    console.log(guessTilesElements);

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
        guessBoxes.style.textTransform = 'capitalize';
        rowContainer.appendChild(guessBoxes);  
        inputElements.push(guessBoxes); 
    }
}

// guess button, when clicked it console logs the words in each letter tile
let guessBtn = document.createElement('button');
guessBtn.innerHTML = 'GUESS';
guessBtn.style.height = '50px';
guessBtn.style.border = '2px solid black';
guessBtn.style.borderRadius = '5px';
guessBtn.onclick = function() {onGuessBtnClick()};
guessBoxContainer.appendChild(guessBtn);

function onGuessBtnClick(){
    let userWord = '';
    // Collect the values from each input element
    // have to get the index number of th correct element.value, and then only make that index of inputelements green
    inputElements.forEach(element => {
        userWord += element.value;

        let correctWord = [];
        for (i=0;i<inputElements.length;i++){
            console.log(element.value);
            if (word.includes(element.value)){
                element.style.backgroundColor = '#a2c11c'; 
                correctWord.push(inputElements[i]);
                // if word includes any element value it will put all elements into the correct word array even if wrong since the one of them is correct      
            }
            else {
                inputElements[i].style.backgroundColor = 'red'
            }
            console.log(correctWord);
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






   





