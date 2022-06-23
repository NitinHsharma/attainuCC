const { MongoClient } = require('mongodb');
const data = require('./data/data.json');

const mongoURL = "mongodb+srv://nitinUser:nitinPass@cluster0.r4jxtbt.mongodb.net/?retryWrites=true&w=majority";
const dbName = "postDB";
const colName = "myPosts";

const client = new MongoClient(mongoURL);
let db = null;
let col = null;

async function connectDatabase() {
    try {
        console.log("trying to connect with db");
        await client.connect();

        console.log("connected with db");
        db = client.db(dbName);

        console.log("database selected");
        col = db.collection(colName);
    } catch (error) {
        
    }
}


async function insertAllRecords() {
    try {
       
        console.log("collection selected");
        const result = await col.insertMany(data);

        console.log("records inserted");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


async function insertAdditionalRecords() {
    try {
        const record1 = {
            userId: 10,
            id: 22,
            title: "This is the dummy record which we want to insert part 1",
            body: "This is the dummy record which we want to insert part 1"
        };
        const record2 = {
            userId: 12,
            id: 32,
            title: "This is the dummy record which we want to insert part 2",
            body: "This is the dummy record which we want to insert part 2"
        };

        const result1 = await col.insert(record1);
        console.log("added record 1 ", result1 );

        const result2 = await col.insert(record2);
        console.log("added record 2 ", result2 );

    } catch (error) {
        console.log(error);        
    }
}

async function updateRecords() {
    try {
        console.log("updating the record");

        const query = {
            userId: 10
        };

        const data = {
            body: "This is the updated body for user id 10"
        }

        const result = await col.update(query, { $set:{ body: "This is updated" } }, { multi: true});
        console.log("updated record ", result );
    } catch (error) {
        console.log(error);
    }
}

async function deleteRecords() {
    try {
        const result = await col.deleteMany({ userId: 1 });
        console.log("deleted record ", result );
    } catch (error) {
        console.log(error);
    }
}



(async () => {
    console.log("Before connection to Database");
    await connectDatabase();
    console.log("After connection to Database");

    console.log("Before inserting records");
    await insertAllRecords();
    console.log("After inserting records");

    console.log("Before inserting additional records");
    await insertAdditionalRecords();
    console.log("After inserting additional records");

    console.log("Before updating records");
    await updateRecords();
    console.log("After updating records");

    console.log("Before deleting records");
    await deleteRecords();
    console.log("After deleting records");


})();

