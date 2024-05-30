let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  document.querySelector(".score").textContent = score;
  if (!guess) {
    document.querySelector(".massage").textContent =
      "please select any number between 1 to 20 //////////////";
  } else if (guess == randomNum) {
    document.querySelector(".massage").textContent =
      "congrates correct guess //////////////";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > randomNum) {
    document.querySelector(".massage").textContent =
      "Guesss is too high//////////////";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < randomNum) {
    document.querySelector(".massage").textContent =
      "Guess is too low //////////////";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
document.querySelector(".Again").addEventListener("click", function () {
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".massage").textContent =
    "hey lets start the game//////////";
  randomNum = Math.floor(Math.random() * 20) + 1;
});
