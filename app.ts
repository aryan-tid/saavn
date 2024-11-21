document.addEventListener("DOMContentLoaded", () => {
    const ticTacToeBtn = document.getElementById("tic-tac-toe-btn");
    const rpsBtn = document.getElementById("rock-paper-scissors-btn");
    const gameBoard = document.getElementById("game-board");

    ticTacToeBtn?.addEventListener("click", () => {
        loadGame("tic-tac-toe");
    });

    rpsBtn?.addEventListener("click", () => {
        loadGame("rock-paper-scissors");
    });

    function loadGame(game: string) {
        if (gameBoard) {
            gameBoard.innerHTML = ""; // Clear previous game
            if (game === "tic-tac-toe") {
                startTicTacToe(gameBoard);
            } else if (game === "rock-paper-scissors") {
                startRockPaperScissors(gameBoard);
            }
        }
    }
});
