const router = require('express').Router();
const fs = require('fs').promises;
const jsonData = require('./data.json');

router.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
})

router.post('/survey', async (req, res) => {
    try {
        const data = req.body;

        jsonData.push(data);

        await fs.writeFile('data.json', JSON.stringify(jsonData));

        return res.send({ message: 'success', error: false });
    } catch (error) {
        return res.send({ message: 'failed', error: true });
    }


});

module.exports = router;