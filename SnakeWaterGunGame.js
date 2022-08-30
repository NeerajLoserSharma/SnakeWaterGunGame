/* A program that plays Snake, Wate, Gun game with the user.
This program makes use of alert(), prompt() and confirm(). */

console.log("Welcome to the Snake Water Gun Game!\n\nThis program asks the user for input choice among Snake, water and gun and pairs them against the computer.\n\n");
console.log("The program also displays the score of user and the computer in the end.\n\n\n");
console.log("Best of luck! :)");

let play_again, rounds, rand_num, input, cmptr_choice, user_score, cmptr_score;

do {
  user_score = cmptr_score = 0;
  do {
    rounds = prompt("Enter the number of rounds you wanna play: ");
    rounds = Number.parseInt(rounds);

    if (rounds < 0)
      alert("Please enter a positive number.");
  } while (rounds < 0);

  for (let i = 1; i <= rounds; i++) {
    do {
      input = prompt("Round " + i + "\nChoose among Snake, Water and Gun:")

      if (input.toLowerCase() != "snake" && input.toLowerCase() != "water" && input.toLowerCase() != "gun")
        alert("Invalid input!\nPlease enter a valid one.");
    } while (input.toLowerCase() != "snake" && input.toLowerCase() != "water" && input.toLowerCase() != "gun");

    rand_num = Math.trunc(Math.random() * (4 - 1) + 1);

    if (rand_num == 1)
      cmptr_choice = "Snake";
    else if (rand_num == 2)
      cmptr_choice = "Water";
    else
      cmptr_choice = "Gun";

    alert("Computer chose " + cmptr_choice + ".");

    if ((input.toLowerCase() == "snake" && cmptr_choice == "Gun") || (input.toLowerCase() == "water" && cmptr_choice == "Snake") || (input.toLowerCase() == "gun" && cmptr_choice == "Water")) {
      alert("You lost this round.");
      cmptr_score++;
    }

    else if ((input.toLowerCase() == "gun" && cmptr_choice == "Snake") || (input.toLowerCase() == "snake" && cmptr_choice == "Water") || (input.toLowerCase() == "water" && cmptr_choice == "Gun")) {
      alert("You won this round.");
      user_score++;
    }

    else
      alert("Round tied.");
  }

  alert("Final scores\n\nYour score: " + user_score + "\nComputer's score: " + cmptr_score);

  if (user_score < cmptr_score)
    alert("You lost the game to the computer.\nBetter luck next time.");
  else if (user_score > cmptr_score)
    alert("Congrats 🎉🎉🎆!! You won the game against the computer.");
  else
    alert("Game tied.");

  play_again = confirm("Do you wanna play again?");

} while (play_again)

alert("Have a nice rest of your day 😊😊.");
