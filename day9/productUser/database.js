const { MongoClient } = require('mongodb');

const mongoURL = "mongodb+srv://nitinUser:nitinPass@cluster0.r4jxtbt.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(mongoURL);


async function makeConnection() {
    await client.connect();
}

async function getClient() {
    return client;
}

module.exports = {
    makeConnection,
    getClient
}