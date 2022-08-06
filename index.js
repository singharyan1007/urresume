const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const pdf = require('html-pdf');
const path = require('path');


const pdftemplate = require('./documents');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Generating the pdf using the html-pdf module
app.post('/create-pdf', (req, res) => {
    pdf.create(pdftemplate(req.body), {}).toFile('Resume.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
            console.log(err);
        }
        res.send(Promise.resolve());
        console.log("success");
    });
});

//Sending generated pdf to client
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`)
});

//setting the port 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server strated on port ${port}`));


