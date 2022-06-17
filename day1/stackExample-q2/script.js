var stack = [];

const pushBtn = document.getElementById('push');
const popBtn = document.getElementById('pop');


pushBtn.addEventListener('click', pushHandler);
popBtn.addEventListener('click', popHandler);

function pushHandler() {
    const num = document.getElementById('num').value;
    stack.push(num);
    console.log(stack);
    displayStack();
}

function popHandler() {
    if (stack.length > 0) {
        const num = stack.pop();
        console.log(stack);
        displayStack();
    } else {
        alert('stack is empty');
    }

}

function displayStack() {
    const result = document.getElementById('result');
    result.innerHTML = '';
    
    // default
    var flagFirstElement = true;

// [1,2,3]
    stack.forEach(element => {
        if (flagFirstElement) {
            result.innerHTML += element;
            flagFirstElement = false;
        } else {
            result.innerHTML += ', ' + element;
        }
    });
}
