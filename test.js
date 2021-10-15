//Capture computer choice
function computerPlay() {
	let computerAns = ["rock", "paper", "scissors"];
	let computerSelection =
		computerAns[Math.floor(Math.random() * computerAns.length)];
	return computerSelection;
}
// capture user choice
function userPlay() {
	let playerSelection = prompt("Choose Object :", "");
	return playerSelection;
}

let result;
let userPts = 0;
let compPts = 0;
let points = 0;
let userTotal = 0;
let compTotal = 0;

// check for player choice;

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "rock") {
		userPts = 1;
		compPts = 1;
		result = `${playerSelection} and ${computerSelection} : You tie, Your score is : ${userPts} points`;
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		userPts = 0;
		compPts = 2;
		result = `${playerSelection} and ${computerSelection} : You loose, paper covers rock ${userPts} points`;
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		userPts = 2;
		compPts = 0;
		result = `${playerSelection} and ${computerSelection} : You win, rock beats scissors: ${userPts} points`;
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		userPts = 1;
		compPts = 1;
		result = `${playerSelection} and ${computerSelection} : You tie, Your score is :  ${userPts} points`;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		userPts = 2;
		compPts = 0;
		result = `${playerSelection} and ${computerSelection} : You win, paper covers rock ${userPts} points`;
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		userPts = 0;
		compPts = 2;
		result = `${playerSelection} and ${computerSelection} : You loose, paper cuts rock : ${userPts} points`;
	} else if (
		playerSelection === "scissors" &&
		computerSelection === "scissors"
	) {
		userPts = 1;
		compPts = 1;
		result = `${playerSelection} and ${computerSelection} : You tie ${userPts} points`;
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		userPts = 2;
		compPts = 0;
		result = `${playerSelection} and ${computerSelection} : You win, scissors cut paper : ${userPts} points`;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		userPts = 0;
		compPts = 2;
		result = `${playerSelection} and ${computerSelection} : You loose, rock beats scissors : ${userPts} points`;
	} else {
		userPts = 0;
		compPts = 0;
		result = `wrong input ${playerSelection} and ${computerSelection}`;
	}
	return console.log(result);
}
// starting the game;
function game() {
	let playerSelection;
	let computerSelection;
	let rounds = 0;
	while (rounds <= 5) {
		playRound(userPlay(), computerPlay());
		userTotal += userPts;
		compTotal += compPts;
		rounds++;
	}
	// Computing and displaying  the winner
	if (userTotal > compTotal) {
		console.log(`Your score is: ${userTotal}`);
		console.log(`Computer score is: ${compTotal}`);
		console.log(`**Congragulations, You have won!**`);
	} else if (userTotal == compTotal) {
		console.log(`Your score is: ${userTotal}`);
		console.log(`Computer score is: ${compTotal}`);
		console.log(`** HuH!!, IT IS A TIE !**`);
	} else {
		console.log(`Your score is: ${userTotal}`);
		console.log(`Computer score is: ${compTotal}`);
		console.log("You have lost");
	}
	return;
}
