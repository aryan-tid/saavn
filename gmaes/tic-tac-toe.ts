function startTicTacToe(container: HTMLElement) {
    const board = Array(9).fill(null);
    let currentPlayer = "X";

    function renderBoard() {
        container.innerHTML = ""; // Clear board
        const grid = document.createElement("div");
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "repeat(3, 1fr)";
        grid.style.gap = "5px";
        grid.style.width = "100%";

        board.forEach((cell, idx) => {
            const cellElement = document.createElement("div");
            cellElement.style.border = "1px solid #333";
            cellElement.style.height = "80px";
            cellElement.style.display = "flex";
            cellElement.style.alignItems = "center";
            cellElement.style.justifyContent = "center";
            cellElement.style.fontSize = "1.5em";
            cellElement.style.cursor = cell ? "default" : "pointer";

            cellElement.textContent = cell;
            cellElement.addEventListener("click", () => makeMove(idx));

            grid.appendChild(cellElement);
        });

        container.appendChild(grid);
    }

    function makeMove(index: number) {
        if (!board[index]) {
            board[index] = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            renderBoard();
        }
    }

    renderBoard();
}
