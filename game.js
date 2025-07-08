let vez = 1;

const buttons = [];
for (let i = 1; i <= 9; i++) {
    buttons.push(document.getElementById(String(i)));
}

const novo = document.getElementById("novo");

function handleButtonClick(event) {
    const btn = event.target;
    if (vez % 2 === 0) 
        btn.innerHTML = 'X';
    else 
        btn.innerHTML = 'O';
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
    });
    vez = 1;
});
