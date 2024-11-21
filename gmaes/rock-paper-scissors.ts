function startRockPaperScissors(container: HTMLElement) {
    const choices = ["Rock", "Paper", "Scissors"];
    const resultDisplay = document.createElement("div");
    const buttonsContainer = document.createElement("div");

    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.addEventListener("click", () => playGame(choice));
        buttonsContainer.appendChild(btn);
    });

    container.appendChild(buttonsContainer);
    container.appendChild(resultDisplay);

    function playGame(playerChoice: string) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = "";

        if (playerChoice === computerChoice) {
            result = "It's a draw!";
        } else if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "You win!";
        } else {
            result = "You lose!";
        }

        resultDisplay.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    }
}
