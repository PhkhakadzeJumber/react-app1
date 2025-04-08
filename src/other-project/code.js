// js code

let num = Math.floor(Math.random() * (100)) + 1;
console.log(num);

const input = document.getElementById("Input");
const guess = document.getElementById("Guess");
const restart = document.getElementById("Restart");
const ul = document.getElementById("ul");
const low = document.getElementById("low");
const score = document.getElementById("score");
const attempts = document.getElementById("attempts");

let score_val = 0;
let attempts_val = 0;
let inputVal = "";
let cnt = 10;

input.addEventListener("input", () => {
    inputVal = input.value;
});

guess.addEventListener("click", () => {
    cnt -= 1;

    const myGuess = parseInt(inputVal);
    if(inputVal.length == 0) 
        return alert("input value required");
    else if(isNaN(myGuess) || myGuess != inputVal)
        return alert("input must be a number");
    else if(myGuess > 100 || myGuess < 0)
        return alert("not a valid input");

    const newElement = document.createElement("li");

    if(myGuess > num) {
        low.innerText = "📈 Too high!";
        newElement.innerText = inputVal + " (Too high) ";
        attempts_val += 1;
    }
    else if(myGuess < num) {
        low.innerText = "📈 Too low!";
        newElement.innerText = inputVal + " (Too low) ";
        attempts_val += 1;
    }
    else {
        cnt = 10;
        score_val += 1;
        attempts_val = 0;
        score.innerText = score_val;
        attempts.innerText = attempts_val + " / 10";
        ul.innerHTML = "";
        num = Math.floor(Math.random() * (100)) + 1;
        console.log(num);
        return alert("🎉 Correct!");
    }

    if(cnt == -1) {
        input.value = "";
        input.disabled = true;
        ul.innerHTML = "";
        score.innerText = 0;
        attempts.innerText = "0 / 10";
        return alert("💥 Game Over!");
    }

    attempts.innerText = attempts_val + " / 10";

    ul.appendChild(newElement);

    input.value = "";
    inputVal = "";
    
});

restart.addEventListener("click", () => {
    num = Math.floor(Math.random() * (100)) + 1;
    console.log(num);

    input.disabled = false;
    ul.innerHTML = "";
    input.value = "";
    inputVal = "";
    cnt = 10;
    score_val = 0;
    attempts_val = 0;
    score.innerText = score_val;
    attempts.innerText = attempts_val + " / 10";
    
});


