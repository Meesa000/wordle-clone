let guessTiles = document.getElementById('guess-tiles');
guessTiles.style.display = 'flex';
guessTiles.style.justifyContent = 'center';


let guessBox = document.createElement('div');
guessBox.style.display = 'flex';
guessBox.style.width = '50px';
guessBox.style.height = '50px';
guessBox.style.border = '2px black solid';


guessTiles.appendChild(guessBox);
console.log(guessTiles);