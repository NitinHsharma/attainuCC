const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

(async () => {
    try {
        await db.makeConnection();
        app.listen(3000, () => {
            console.log('listening on port 3000');
        });
    } catch (error) {
        console.log(error);
    }

})();


