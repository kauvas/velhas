let vez = 1;
const buttons = document.getElementById("button");
buttons.addEventListener("click", passarVez => {
        vez++;
        console.log('vez:' + vez);       
});
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const novo = document.getElementById("novo");

button1.addEventListener("click", marcar1 =>{   
  
if (vez % 2 === 0)
    button1.innerHTML = 'X';
else
    button1.innerHTML = 'O';
button1.disabled = true
});

button2.addEventListener("click", marcar2 =>{
if (vez % 2 === 0)
    button2.innerHTML = 'X';
else
    button2.innerHTML = 'O';
button2.disabled = true
});

button3.addEventListener("click", marcar3 =>{
if (vez % 2 === 0)
    button3.innerHTML = 'X';
else
    button3.innerHTML = 'O';
button3.disabled = true
});

button4.addEventListener("click", marcar4 =>{
if (vez % 2 === 0)
    button4.innerHTML = 'X';
else
    button4.innerHTML = 'O';
button4.disabled = true
});

button5.addEventListener("click", marcar5 =>{
if (vez % 2 === 0)
    button5.innerHTML = 'X';
else
    button5.innerHTML = 'O';
button5.disabled = true
});

button6.addEventListener("click", marcar6 =>{
if (vez % 2 === 0)
    button6.innerHTML = 'X';
else
    button6.innerHTML = 'O';
button6.disabled = true
});

button7.addEventListener("click", marcar7 =>{
if (vez % 2 === 0)
    button7.innerHTML = 'X';
else
    button7.innerHTML = 'O';
button7.disabled = true
});

button8.addEventListener("click", marcar8 =>{ 
if (vez % 2 === 0)
    button8.innerHTML = 'X';
else
    button8.innerHTML = 'O';
button8.disabled = true
});

button9.addEventListener("click", marcar9 =>{    
if (vez % 2 === 0)
    button9.innerHTML = 'X';
else
    button9.innerHTML = 'O';
button9.disabled = true
});

novo.addEventListener("click", novoJogo =>{
    button1.innerHTML = '-';
    button2.innerHTML = '-';
    button3.innerHTML = '-';
    button4.innerHTML = '-';
    button5.innerHTML = '-';
    button6.innerHTML = '-';
    button7.innerHTML = '-';
    button8.innerHTML = '-';
    button9.innerHTML = '-';
    
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;

    vez = 1;
})