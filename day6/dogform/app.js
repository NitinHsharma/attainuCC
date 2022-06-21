const express = require('express');
const dataJson = require('./data.json');
const fs = require('fs').promises;
const { engine } = require('express-handlebars');

const app = express();


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/dogData', async function(req, res) {
    try {
        const newDog = req.body;
        console.log(newDog);
        dataJson.push(newDog);
        await fs.writeFile('./data.json', JSON.stringify(dataJson));
        return res.render('dog', newDog);
    
    } catch (error) {
        console.log(error);
    }
   

});


app.listen(3000, function() {
    console.log('listening on port 3000');
})