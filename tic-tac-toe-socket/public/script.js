const socket = io();

const boardDiv = document.getElementById("board");
const statusText = document.getElementById("status");
const playerXText = document.getElementById("playerX");
const playerOText = document.getElementById("playerO");

let player = "";
let currentTurn = "X";
let gameActive = true;
let cells = [];

// 🔹 Scores
let score = { X: 0, O: 0 };

// Create board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("click", () => {
        if (cell.textContent === "" && player === currentTurn && gameActive) {
            socket.emit("makeMove", { index: i, player });
        }
    });

    boardDiv.appendChild(cell);
    cells.push(cell);
}

// Player assigned
socket.on("playerAssigned", (p) => {
    player = p;
    statusText.textContent = "You are Player " + player;
});

// Move received
socket.on("moveMade", ({ index, player: p }) => {
    cells[index].textContent = p;
    currentTurn = p === "X" ? "O" : "X";

    highlightTurn();
});

// Game over
socket.on("gameOver", (result) => {
    gameActive = false;

    if (result === "draw") {
        statusText.textContent = "🤝 Draw!";
    } else {
        statusText.textContent = "🏆 " + result + " Wins!";
        score[result]++;
        updateScore();
    }
});

// Reset
socket.on("resetGame", () => {
    cells.forEach(c => c.textContent = "");
    currentTurn = "X";
    gameActive = true;
    statusText.textContent = "New Game Started";
    highlightTurn();
});

// Restart
function restart() {
    socket.emit("restartGame");
}

// 🔹 Highlight turn
function highlightTurn() {
    if (currentTurn === "X") {
        playerXText.style.background = "#00ffcc";
        playerOText.style.background = "rgba(255,255,255,0.2)";
    } else {
        playerOText.style.background = "#00ffcc";
        playerXText.style.background = "rgba(255,255,255,0.2)";
    }
}

// 🔹 Update Score
function updateScore() {
    playerXText.textContent = "Player X: " + score.X;
    playerOText.textContent = "Player O: " + score.O;
}