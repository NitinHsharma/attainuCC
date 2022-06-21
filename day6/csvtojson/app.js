const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'data/abc.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'id', title: 'ID'},
        {id: 'price', title: 'Price'},
        {id: 'year', title: 'Year'},
        {id: 'company', title: 'Company'}
    ]
});


const result = [];
function csvToJSON() {
    fs.createReadStream('./data/cars.csv')
    .pipe(csv())
    .on('data', (data) => {
        result.push(data);
    }).on('end', () => {
        fs.writeFile('./data/cars.json', JSON.stringify(result), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully converted csv to json');
            }
        });
    })
}

// csvToJSON();


function jsonToCSV() {
    const records = require('./data/cars.json');
    csvWriter.writeRecords(records) 
    .then(data => {
        console.log(data);
    })
}


jsonToCSV();