const express = require('express');
const app =express();
const routes = require('./routes');

// server static files from public folder
app.use(express.json());

app.use(routes);
app.use(express.static('public'));


app.listen(3000, function() {
    console.log('listening on port 3000');
});