const addBtn = document.getElementById('add');
addBtn.addEventListener('click', eventHandler);

function eventHandler() {
    const number1 = document.getElementById('Number1').value;
    const number2 = document.getElementById('Number2').value;
    const ans = sum(number1, number2);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ans;
}

function sum(num1, num2) {
    const number1 = parseInt(num1, 10);
    const number2 = parseInt(num2, 10);
    return number1 + number2;
}