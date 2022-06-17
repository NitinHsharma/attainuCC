const keys = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+'
}

function getRandomChar(str) {
    const index = Math.floor(Math.random() * str.length);
    return str[index];
}

function getRandomType(allowedThings) {
    const index = Math.floor(Math.random() * allowedThings.length);
    return allowedThings[index];
}
window.onload = function () {
    const createBtn = document.getElementById('create');
    const copyBtn = document.getElementById('copy');
    copyBtn.addEventListener('click', copyPassword);
    createBtn.addEventListener('click', generatePassword);
}

function generatePassword() {
    const len = document.getElementById('Plength').value;
    const allowedUpperCase = document.getElementById('uppercase').checked;
    const allowedLowerCase = document.getElementById('lowercase').checked;
    const allowedNumbers = document.getElementById('numbers').checked;
    const allowedSymbols = document.getElementById('symbol').checked;

    const allowedThings = [];
    if (allowedUpperCase) {
        allowedThings.push('upper');
    }

    if (allowedLowerCase) {
        allowedThings.push('lower');
    }

    if (allowedNumbers) {
        allowedThings.push('numbers');
    }

    if (allowedSymbols) {
        allowedThings.push('symbols');
    }

    if (allowedThings.length == 0) {
        alert("Please select at least one type of character");
        return;
    }
    let password = "";
    while (password.length != len) {
        const type = getRandomType(allowedThings);

        console.log(type);

        const randomChar = getRandomChar(keys[type])

        console.log(randomChar);
        password += randomChar
    }
    document.getElementById('password').value = password;
    console.log(password);

}

function copyPassword() {
    const password = document.getElementById('password');
    password.select();
    navigator.clipboard.writeText(password.value);
}
