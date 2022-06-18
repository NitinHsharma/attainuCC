const express = require('express');
const randomColor = require('randomcolor'); 
const all = require("everyday-fun");
const app = express();

app.get('/randomColor', (req, res) => {
    const color = randomColor();
    return res.send(color);
});

app.get('/currentDate', (req, res) => {
    const date = new Date();
    return res.send(date);
});

app.get('/joke', (req, res) => {
    const joke = all.getRandomJoke();
    return res.send(joke.body)
});
app.get('/quote', (req, res) => {
    const quote = all.getRandomQuote();
    return res.send(quote)
});
app.get('/riddle', (req, res) => {
    const riddle = all.getRandomRiddle();
    return res.send(riddle)
});


app.listen(3000, () => {
    console.log('listening on port 3000');
})