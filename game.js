let vez = 1;

const buttons = [];
for (let i = 1; i <= 9; i++) {
    buttons.push(document.getElementById(String(i)));
}
const rvez = document.getElementById("rvez")
const novo = document.getElementById("novo");
rvez.innerHTML = 'O';

function handleButtonClick(event) {
    const btn = event.target;
    if (vez % 2 === 0) {
        btn.innerHTML = 'X';
        rvez.innerHTML = 'O';
    } else {
        btn.innerHTML = 'O';
        rvez.innerHTML = 'X';
    }
    btn.disabled = true;
    vez++;
}

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

novo.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.innerHTML = '-';
        btn.disabled = false;
        rvez.innerHTML = 'O';
    });
    vez = 1;
});
