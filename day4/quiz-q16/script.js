let data;
let currentQuestion = 0;
let ans = [];

window.onload = function () {
    fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple', {
        'Access-Control-Allow-Origin': '*',
    })
        .then(response => response.json())
        .then(res => {
            let id = 0;
            data = res.results.map(item => {
                // adding correct ans into options
                const options = [{
                    text: item.correct_answer,
                    isCorrect: true
                }];

                // adding all incorrect answers into options
                item.incorrect_answers.map(ans => {
                    options.push({
                        text: ans,
                        isCorrect: false
                    })
                });

                const resposne = {
                    id: id++,
                    question: item.question,
                    options: options
                }

                // making simple object
                return resposne;
            });
            console.log(data);
            attachHandlers();
            generateQuestion(currentQuestion);
        });
}

function attachHandlers() {
    const nextBtn = document.getElementById('next');
    const perviousBtn = document.getElementById('pervious');
    const submitBtn = document.getElementById('submit');

    nextBtn.addEventListener('click', generateNextQuestion);
    perviousBtn.addEventListener('click', generatePerviousQuestion);
    submitBtn.addEventListener('click', showResults);

    const radioBtns = document.querySelectorAll('input[type="radio"]');

    for (let index = 0; index < radioBtns.length; index++) {
        const radioBtn = radioBtns[index];

        radioBtn.addEventListener('change', (event) => {
            const element = event.target;
            const id = element.dataset.id;
            const isCorrect = element.value;
            console.log(id, isCorrect);

            const exists = ans.findIndex(item => item.id == id);
            if (exists == -1) {
                ans.push({
                    id: id,
                    isCorrect: isCorrect
                });
            } else {
                ans[exists].isCorrect = isCorrect;
            }
            
        })


    }


}

function generateQuestion(index) {
    const item = data[index];
    let { id, question, options } = item;
    const questionDiv = document.getElementById('question');
    questionDiv.innerHTML = `<h1>${question}</h1>`;

    // shuffle options 
    options = options.sort(() => Math.random() - 0.5);

    for (let index = 0; index < options.length; index++) {

        const option = options[index];

        const optionRadioDiv = document.getElementById(`op${index}`);
        const optionLableDiv = document.getElementById(`lable${index}`);

        optionLableDiv.innerText = option.text;
        optionRadioDiv.dataset.id = id;
        optionRadioDiv.value = option.isCorrect;
        optionRadioDiv.checked = false;
    }

}

function generateNextQuestion() {
    if (currentQuestion == data.length) {
        alert('You have completed the quiz');
    }
    currentQuestion++;
    generateQuestion(currentQuestion);
}

function generatePerviousQuestion() {
    if (currentQuestion == 0) {
        alert('You have already started the quiz');
    }
    currentQuestion--;
    generateQuestion(currentQuestion);
}

function showResults() {
    const correctAns = ans.filter( item => item.isCorrect == 'true' );
    alert(`You have ${correctAns.length} correct answers`);
}