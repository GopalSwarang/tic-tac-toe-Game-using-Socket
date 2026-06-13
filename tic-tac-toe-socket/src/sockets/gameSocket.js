const { checkWinner } = require("../game/gameLogic");

let players = {
    X: null,
    O: null
};

let currentTurn = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function setupGameSocket(io, socket) {

    console.log("User connected:", socket.id);

    if (!players.X) {
        players.X = socket.id;
        socket.emit("playerAssigned", "X");
        console.log("Player X joined");

    } else if (!players.O) {
        players.O = socket.id;
        socket.emit("playerAssigned", "O");
        console.log("Player O joined");

    } else {
        socket.emit("full", "Game is full");
        return;
    }

    // 🔹 Handle Move
    socket.on("makeMove", (data) => {
        if (data.player === currentTurn && board[data.index] === "") {

            board[data.index] = data.player;

            const result = checkWinner(board);

            io.emit("moveMade", {
                index: data.index,
                player: data.player
            });

            if (result) {
                io.emit("gameOver", result);
                resetGame();
                return;
            }

            currentTurn = currentTurn === "X" ? "O" : "X";
        }
    });

    // 🔹 Restart Game
    socket.on("restartGame", () => {
        resetGame();
        io.emit("resetGame");
    });

    // 🔹 Handle Disconnect (VERY IMPORTANT)
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);

        if (players.X === socket.id) {
            players.X = null;
        }
        if (players.O === socket.id) {
            players.O = null;
        }

        resetGame();
        io.emit("resetGame");
    });
}

// 🔹 Reset Game
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentTurn = "X";
}

module.exports = setupGameSocket;