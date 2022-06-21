const express = require('express');
const multer = require('multer');
const {engine} = require('express-handlebars');
const fs = require('fs').promises;
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+'/public/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype); // image/png image/jpg application/pdf video/mp4 ['video', 'mp4']
        // avatar.png
        const filename = file.fieldname + "." +file.mimetype.split('/')[1];
        cb(null, filename);
    }
})

const upload = multer({ storage: storage })

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/save', upload.single('avatar'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    let data = req.body;
    data.file = "/uploads/" + req.file.filename;

    return res.render('home', data);
});

// for the next assignement (upload / gallary)
app.post('/upload', upload.single('avatar'), (req, res) => {
    
    console.log(req.file);

    return res.send('uploaded');
});

app.get('/gallary', async (req, res) => {
   const files = await fs.readdir( __dirname + '/public/uploads');
   console.log(files);
   const updatedFile = files.map(item => `/uploads/${item}`);
   console.log(updatedFile);
   const img = {
       files: updatedFile
   }
   return res.render('gallary', img);
});

// for the next assignement (upload / gallary)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});