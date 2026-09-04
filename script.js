var gameElements = document.querySelectorAll(".select-move img");
let userChoice = document.querySelector(".user-choice img");
let computerChoice = document.querySelector(".computer-choice img");
let score = document.querySelector(".game-status .score span");
let showResult = document.querySelector(".game-status .result");
let startBtn = document.querySelector(".game-status button");

// user move
for (i = 0; i < gameElements.length; i++) {
	gameElements[i].addEventListener("click", function () {
		document.querySelector(".user-choice p").style.display = "none";
		userChoice.style.display = "block";
		userChoice.src = this.src;
		userChoice.alt = this.alt;
	});
}

// computer move
function computer_choice() {
	let index = Math.random() * 2;
	if (index > 1.5) {
		index = Math.ceil(index);
	} else {
		index = Math.floor(index);
	}

	if (userChoice.alt != "") {
		document.querySelector(".computer-choice p").style.display = "none";
		computerChoice.style.display = "block";
		computerChoice.src = gameElements[index].src;
		computerChoice.alt = gameElements[index].alt;
	}
}

// game result
let result;
let count = 0;
function gameResult() {
	if (userChoice.alt == "paper") {
		if (computerChoice.alt == "paper") {
			result = "Draw";
		} else if (computerChoice.alt == "rock") {
			result = "Win";
			score.innerHTML = ++count;
		} else if (computerChoice.alt == "scissors") {
			result = "Miss";
			score.innerHTML = --count;
		}
	} else if (userChoice.alt == "rock") {
		if (computerChoice.alt == "rock") {
			result = "Draw";
		} else if (computerChoice.alt == "scissors") {
			result = "Win";
			score.innerHTML = ++count;
		} else if (computerChoice.alt == "paper") {
			result = "Miss";
			score.innerHTML = --count;
		}
	} else if (userChoice.alt == "scissors") {
		if (computerChoice.alt == "scissors") {
			result = "Draw";
		} else if (computerChoice.alt == "paper") {
			result = "Win";
			score.innerHTML = ++count;
		} else if (computerChoice.alt == "rock") {
			result = "Miss";
			score.innerHTML = --count;
		}
	} else {
		alert("please select a move");
		result = "...";
	}
	showResult.innerHTML = result;
}
startBtn.addEventListener("click", computer_choice);
startBtn.addEventListener("click", gameResult);
