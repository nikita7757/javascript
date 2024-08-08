/* create a game where you start with any random number.
 Ask user to keep guessing the number until
user enter correct number*/

let gamenum = 15;
let usernum = prompt('guess the game number!');

while(gamenum != usernum){
 usernum =prompt('you entered wrong number. Guess the number :');
}
console.log('Congratulations you entered right number');