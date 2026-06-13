function checkWinner(board) {

    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // X or O
        }
    }

    // Draw condition
    if (!board.includes("")) {
        return "draw";
    }

    return null;
}

module.exports = { checkWinner };