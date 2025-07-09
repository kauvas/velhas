let vez = 1;
const rvez = document.getElementById("rvez");
const novo = document.getElementById("novo");
const buttons = [];
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
for (let i = 1; i <= 9; i++) {
    buttons.push(document.getElementById(String(i)));
}

let currentPlayer = 'O';
rvez.innerHTML = currentPlayer;

function handleButtonClick(event) {
    const btn = event.target;
    btn.innerHTML = currentPlayer;
    btn.disabled = true;

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const valA = buttons[a - 1].innerHTML;
        const valB = buttons[b - 1].innerHTML;
        const valC = buttons[c - 1].innerHTML;
        if (
            (valA === 'O' || valA === 'X') &&
            valA === valB &&
            valA === valC
        ) {
            rvez.innerHTML = "Jogador " + valA + " venceu!";
            buttons.forEach(buttons => {
            buttons.disabled = true;    
            });
            return;
        }
    }

    vez++;
    if (vez >= 10) {
        rvez.innerHTML = "Empate!";
            buttons.forEach(buttons => {
            buttons.disabled = true;
            })
        return;
    }

    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    rvez.innerHTML = currentPlayer;
}

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

novo.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.innerHTML = '-';
        btn.disabled = false;
    });
    vez = 1;
    currentPlayer = 'O';
    rvez.innerHTML = currentPlayer;
});
