const dogBtn = document.getElementById("dogClick");
dogBtn.addEventListener("click", loadImage);

function loadImage() {
    // call the api 
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById("myDog").src = data.message;
        })
        .catch(error => console.log(error));

}
loadImage()
