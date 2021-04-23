function displayWordSoFar(word, guesses) {
  // WRITE ME schrijf hier wat gebruiker ziet als hij iets raad, en hoeveel hij al heeft geraden

  let displayedWord = "";
  // let guessedWord = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const isGuessed = guesses.includes(letter);

    if (isGuessed) {
      const toAdd = letter + " ";
      displayedWord += toAdd
    }
    else {
      displayedWord += "_ ";
    }
  }
  return displayedWord;

}


function isGameWon(word, guesses) {
  // WRITE ME
  // Checkt voor winconditie
  for (let i = 0; i < word.length; i++) {
    // bij elk letter controloren of hij bij de guesses zit
    let letter = word[i];
    if (!guesses.includes(letter)) {
      return false;
    }
  }
  //console.log("Je hebt gewonnen!");
  return true;
}

function isGameLost(word, guesses) {
  // WRITE ME
  // Checkt of je hebt verloren > meer dan 7x geraden = verloren maak gebruik van for loop

  // Maak een counter die bij elke loop telt hoevaak je er doorheen gaat

  // De goede guesses moeten niet meegeteld worden!
  let wrongGuessesCounter = 0;
   for (let i = 0; i < guesses.length; i++) {
    //
    let guessedLetter = guesses[i];
    if (!word.includes(guessedLetter)) {
      wrongGuessesCounter+= 1;
    }
  }
  //console.log("Je het verloren!");
  return wrongGuessesCounter >= 7;
}

// Functie aanmaken zodat je maar één letter mag raden
function singleLetter (letter) {
  return letter.length === 1;

}
// Mogen geen symbolen bevatten
function isTheAlphabet (letter) {
  return /[a-zA-Z]/.test(letter);
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  singleLetter: singleLetter,
  isTheAlphabet: isTheAlphabet,
};