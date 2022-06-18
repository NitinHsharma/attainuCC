const express = require('express');
const fs = require('fs');

const app = express();


app.get('/', async (req, res) => {

    const jsonData = await fs.readFile('data.json', 'utf8');
    const data = JSON.parse(jsonData);
    data.count = data.count + 1;
    await fs.writeFile('data.json', JSON.stringify(data));

    return res.send('Hello World counts are '+ data.count);
});


app.get('/reset', async (req, res) => {
    const data = {
        count: 0
    }
    await fs.writeFile('data.json', JSON.stringify(data));
    return res.send('Reset counts to 0');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});




