let userName = "Benjamin";
userName ? console.log(`Hello, ${userName}!`) :console.log("Hello!"); 

let userQuestion = "Will the surf be good this weekend?";
console.log(`${userName} just asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

if (randomNumber === 0) {
  console.log(eightBall = "It is certain.");
} else if (randomNumber === 1) {
  console.log(eightBall = "It is decidedly so.");
} else if (randomNumber === 2) {
  console.log(eightBall = "Reply hazy try again.");
} else if (randomNumber === 3) {
  console.log(eightBall = "Cannot predict now.");
} else if (randomNumber === 4) {
  console.log(eightBall = "Do not count on it.");
} else if (randomNumber === 5) {
  console.log(eightBall = "My sources say no.");
} else if (randomNumber === 6) {
  console.log(eightBall = "Outlook not so good.");
} if (randomNumber === 7) {
  console.log(eightBall = "signs point to yes.");
} 

console.log(`The magic 8 ball say's ${eightBall}`);
