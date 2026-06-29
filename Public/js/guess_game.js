let target = 0;

let attempt = 0;

const maxAttempt = 5;
 
const guessInput = document.getElementById("guess-value");

const guessBtn = document.getElementById("guess-btn");

const restartBtn = document.getElementById("restart-btn");

const attemptDisplay = document.getElementById("attempt-text");

const result = document.getElementById("result");
 
// Initial State

attemptDisplay.textContent = `Attempt ${attempt}/${maxAttempt}`;

result.textContent = "";

guessInput.value = "";
 
guessBtn.style.display = "none";

restartBtn.style.display = "inline-block";
 
// Restart Game

restartBtn.onclick = function () {

    target = Math.floor(Math.random() * 20) + 1;

    console.log(target); // Remove this when submitting
 
    attempt = 0;
 
    attemptDisplay.textContent = `Attempt ${attempt}/${maxAttempt}`;

    result.textContent = "";

    guessInput.value = "";
 
    restartBtn.style.display = "none";

    guessBtn.style.display = "inline-block";
 
    guessInput.focus();

};
 
// Guess Button

guessBtn.onclick = function () {
 
    let value = guessInput.value.trim();
 
    // Empty input

    if (value === "") {

        return;

    }
 
    // Non-number

    if (isNaN(value)) {

        return;

    }
 
    value = Number(value);
 
    // Out of range

    if (value < 1 || value > 20) {

        result.textContent = `${value} is out of range`;

        guessInput.value = "";

        guessInput.focus();

        return;

    }
 
    attempt++;

    attemptDisplay.textContent = `Attempt ${attempt}/${maxAttempt}`;
 
    if (value > target) {

        result.textContent = `${value} is too high`;

    }

    else if (value < target) {

        result.textContent = `${value} is too low`;

    }

    else {

        result.textContent = "You WIN";
 
        guessBtn.style.display = "none";

        restartBtn.style.display = "inline-block";
 
        guessInput.value = "";

        guessInput.focus();
 
        return;

    }
 
    if (attempt >= maxAttempt) {

        result.textContent = "You LOSE";
 
        guessBtn.style.display = "none";

        restartBtn.style.display = "inline-block";

    }
 
    guessInput.value = "";

    guessInput.focus();

};
 