const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, singleLetter, isTheAlphabet } = require("./gamelogic");



// Schrijf functie voor oproepen van letter
function askForLetter (guesses) {
  let letter = question("Raad een letter: ");
  // Check of het een enkele letter is
  while (!singleLetter(letter)) {
    console.log("Sorry! Je mag maar één letter invoeren!");
    letter = question("Raad een letter: "); // Haal deze maar eens weg (infinite loop)
  }
  if(guesses.includes(letter)) {
    console.log("Deze letter heb je al geraden!");
    letter = askForLetter(guesses);
  }

  else if (!isTheAlphabet(letter) || guesses.includes(letter.toLocaleUpperCase())) {
    console.log("Letter mag geen speciale tekens of hoofdletters bevatten!");
    letter = askForLetter(guesses);
  }
  return letter;
}

function hangman (guesses, word) {
  let wrongGuessesCounter = 0;
  for (let i = 0; i < guesses.length; i++) {
    //
    let guessedLetter = guesses[i];
    if (!word.includes(guessedLetter)) {
      wrongGuessesCounter+= 1;
    }
    // else {
    //   return wrongGuessesCounter >= 7;
    // }
  }

    switch (wrongGuessesCounter) {
      case 1 :
        console.log("Eerste keer fout. Je hebt nog 6 pogingen.");
        console.log(`
|   
|
|
|
|
=========== `);
        break;

      case 2 :
        console.log("Dit is de tweede keer fout. Je hebt nog 5 pogingen.");
        console.log(`              
__________
| /     |
|/     
|       
|       
|
===========
        `);
        break;

      case 3 :
        console.log("Dit is de derde keer fout. Je hebt nog 4 pogingen.");
        console.log(`
__________
| /     |
|/      o
|       
|       
|
===========`)
        break;

      case 4 :
        console.log("Dit is de vier keer fout. Je hebt nog 3 pogingen.");
        console.log(`
__________
| /     |
|/     _o_
|       
|       
|
===========`)
        break;

      case 5 :
        console.log("Dit is de vijfde keer fout. Je hebt nog 2 pogingen.");
        console.log(`
__________
| /     |
|/     _o_
|       O
|       
|
===========`
        );
        break;

      case 6 :
        console.log("Dit is de zesde keer fout. Je hebt nog 1 poging.");
        console.log(`
__________
| /     |
|/     _o_
|       O
|      / 
|
===========
        `);
        break;

      case 7 :
        console.log("Dit is de zevende keer fout. GAME OVER!");
        console.log(`
__________
| /     |
|/     _o_
|       O
|      / \\
|
===========`);
        break;

      default:
        console.log("");
        break;
    }
}
function displayWordLength(word) {
  let showUnderscores = word + "_";
  return showUnderscores;
}

function game(word, guesses) {
  hangman(guesses, word);
  if (guesses.length !==0) {
    console.log("Dit heb je tot nu toe geraden: ", guesses);
  }
  console.log(displayWordSoFar(word, guesses));

  // Hier wil ik laten zien hoeveel streepjes het woord bevat
  displayWordLength(word);

  let letter = askForLetter(guesses);

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan
  if (isGameWon(word, guesses)) {
    console.log(displayWordSoFar(word, guesses));
    console.log("Je hebt gewonnen! Het goede woord is: " + word + "!");
  }
  else if(isGameLost(word, guesses)) {
    hangman(guesses, word);
    console.log("Je hebt het 7 keer proberen te raden, dit is VEEL TE VAAK. VERLOREN.");
  }
  else {
    game(word, guesses);
  }
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);
const word = ["spook", "koekjes", "hamster", "hoax", "gelei", "champignon", "belastingsdienst", "chronischevermoeidheidssyndroom"];
let gekozenWoord = word[Math.round(Math.random() * 10) % word.length];
// console.log(gekozenWoord);
// console.log(Math.round(Math.random() * 10) % 3);
game(gekozenWoord, []);
