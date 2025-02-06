const getRock = document.querySelector(".rock");
const getPaper = document.querySelector(".paper");
const getScissors = document.querySelector(".scissor");
const getVictoryStatus = document.querySelector(".victory-status");
const getStartBtn = document.querySelector(".start");
const getRulesBtn = document.querySelector(".rules-btn button");
const getCloseRulesBtn = document.querySelector(".rules .material-symbols-outlined");
const getRulesDiv = document.querySelector(".rules");

let getScoreValue = document.querySelector(".score h1");
let userPickImage = document.querySelector(".you-img img");
let compPickImage = document.querySelector(".comp-img img");
let winLoseSection = document.querySelector(".win-lose");
let scoreValue = 0;

const choices = ["rock", "paper", "scissor"];
const images = {
    rock: "./images/icon-rock.svg",
    paper: "./images/icon-paper.svg",
    scissor: "./images/icon-scissors.svg"
};

// Function to determine winner
const getWinner = (userPick, compPick) => {
    if (userPick === compPick) {
        getVictoryStatus.innerHTML = "draw";
        return "draw";
    } 
    if (
        (userPick === "rock" && compPick === "scissor") ||
        (userPick === "paper" && compPick === "rock") ||
        (userPick === "scissor" && compPick === "paper")
    ) {
        getVictoryStatus.innerHTML = "win";
        return "win";
    } 
    getVictoryStatus.innerHTML = "lose";
    return "lose";
};

const grabPicked = (event) => {
    let userPick = event.currentTarget.classList[1];

    document.querySelector(".hands").style.display = "none";

    // Generate random computer pick
    let compPick = choices[Math.floor(Math.random() * choices.length)];

    // Show picks and result section
    document.querySelector(".pick").style.display = "flex";
    winLoseSection.style.display = "inline";
    userPickImage.src = images[userPick];
    compPickImage.src = images[compPick];

    // Determine winner
    let result = getWinner(userPick, compPick);

    // Update score if the user wins
    if (result === "win") {
        scoreValue += 1;
        getScoreValue.textContent = scoreValue;
    }
};

const resetGame = () => {
    document.querySelector(".hands").style.display = "flex";
    document.querySelector(".pick").style.display = "none";
};

// Function to show rules
const showRules = () => {
    getRulesDiv.style.display = "block";
};

// Function to hide rules
const hideRules = () => {
    getRulesDiv.style.display = "none";
};

// Add event listeners
getPaper.addEventListener("click", grabPicked);
getRock.addEventListener("click", grabPicked);
getScissors.addEventListener("click", grabPicked);
getStartBtn.addEventListener("click", resetGame);
getRulesBtn.addEventListener("click", showRules);
getCloseRulesBtn.addEventListener("click", hideRules);

