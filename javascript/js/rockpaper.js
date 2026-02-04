let player = 0; // 0 = Rock, 1 = Paper, 2 = Scissors
let computer = Math.floor(Math.random() * 3);

if (player === computer) {
  console.log("It's a tie!");
} else if (player === 0 && computer === 2) {
  console.log("Player wins!");
} else if (player === 1 && computer === 0) {
  console.log("Player wins!");
} else if (player === 2 && computer === 1) {
  console.log("Player wins!");
} else {
  console.log("Computer wins!");
}

const choices = ["Rock", "Paper", "Scissors"];
console.log(`Player picked: ${choices[player]}`);
console.log(`Computer picked: ${choices[computer]}`);
