const routes = require('express').Router();
const { getClient } = require('./database');

routes.get('/user', (req, res) => {
    return res.sendFile(__dirname + '/views/user.html');
});

routes.get('/product', (req, res) => {
    return res.sendFile(__dirname + '/views/product.html');
});


routes.post('/user', async (req, res) => {
    try {
        console.log(req.body);
        const client = await getClient();
        const db = client.db('productUserDatabase');
        const collection = db.collection('userCollection');

        const result = await collection.insert(req.body);
        console.log(result);
        return res.send('Thanks for your feedback! ' + JSON.stringify(result));
    } catch (error) {
        console.log(error);
    }
});

routes.post('/product', async (req, res) => {
    try {
        console.log(req.body);
        const client = await getClient();
        const db = client.db('productUserDatabase');
        const collection = db.collection('productCollection');

        const result = await collection.insert(req.body);
        console.log(result);
        return res.send('Thanks for your feedback! ' + JSON.stringify(result));
    } catch (error) {
        console.log(error);
    }
});

routes.get('/', async (req, res) => {
    try {
        const client = await getClient();
        const db = client.db('productUserDatabase');

        const userCollection = db.collection('userCollection');
        const productCollection = db.collection('productCollection');

        const userRecords = userCollection.find({}).toArray();
        const productRecords = productCollection.find({}).toArray();

        const records = await Promise.allSettled([userRecords, productRecords]);
        const [userData, productData] = records;

        return res.send({ userData, productData });
    } catch (error) {
        console.log(error);
    }
});

module.exports = routes;