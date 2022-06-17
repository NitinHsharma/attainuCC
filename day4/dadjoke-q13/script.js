window.onload = function(){
    const jokeBtn = document.getElementById("newJoke");
    jokeBtn.addEventListener("click", getJoke);
    getJoke();
}

function getJoke() {

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'text/plain'
        }
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("joke").innerHTML = `<h1>${data}</h1>`;
        })
        .catch(err => console.log(err));
}

