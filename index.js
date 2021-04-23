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

  else if (!isTheAlphabet(letter)) {
    console.log("Letter mag geen speciale tekens bevatten");
    letter = askForLetter(guesses);
  }
  return letter;
}

function hangman () {
  let numberOfTurns = 0;
  let count = 0;
  for (let i = numberOfTurns < 7; ++i;) {
    switch ( typeof numberOfTurns[i]) {
      case "numberOfTurns":
        console.log(`
      |   
      |
      |
      |
      |
      =========== `);
        ++count; break;



  //     case typeof numberOfTurns[i] == "numberOfTurns":
  //       count++;
  //       console.log(`
  // __________
  // | /     |
  // |/     _o_
  // |       O
  // |      / \\\\
  // |
  // ===========`)
  //       // Hangman plaatje 2
  //       break;

    }
  }
}


function game(word, guesses) {
  let i = 0;
  console.log("Dit heb je tot nu toe geraden: ", guesses + " " + i++);

  let letter = askForLetter(guesses);

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan

  console.log(displayWordSoFar(word, guesses));
  if (isGameWon(word, guesses)) {
    console.log("Je hebt gewonnen!");
  }
  else if(isGameLost(word, guesses)) {
    console.log("Je hebt het 7 keer proberen te raden, dit is VEEL TE VAAK. VERLOREN.");
  }
  else {
    hangman();
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

game("JAVascript", []);