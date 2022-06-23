const routes = require('express').Router();
const { getClient } = require('./database');

routes.get('/survery', (req, res) => {
    return res.sendFile(__dirname + '/views/survery.html');
});


routes.post('/favoriteSurvey', async (req, res) => {
    try {
        console.log(req.body);
        const client = await getClient();
        const db = client.db('surveyDatabase');
        const collection = db.collection('surveyCollection');

        const result = await collection.insert(req.body);
        console.log(result);
        return res.send('Thanks for your feedback! ' + JSON.stringify(result));
    } catch (error) {
        console.log(error);
    }
});

routes.get('/favoriteSurveyResults', async (req, res) => {
    const client = await getClient();
    const db = client.db('surveyDatabase');
    const collection = db.collection('surveyCollection');
    const results = await collection.find({}).toArray();
    return res.send(results);
});

module.exports = routes;