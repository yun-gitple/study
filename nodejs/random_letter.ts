
function genenerateRandomLetters(length: number) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const letters:string[] = [];

  for(let i = 0 ; i < length; i++) {
    letters[i] = alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return letters.join('');
}

console.log('---', genenerateRandomLetters(6));
