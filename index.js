let mongodb = require('./mongodb.utils');
let Puppy = require('./puppy.model');
let express = require('express');
let bodyParser = require('body-parser');


let app = express();

mongodb.connect();
mongodb.createEventListeners();

app.use(bodyParser.json());



app.get('/puppies', (req, res) => {
    Puppy.find({}).exec().then(
        (results) => {
            res.status(200).send(results);
        },
        (error) => {
            res.status(500).send(error);
        }
    )
});

app.post('/puppies', (req, res) => {
    Puppy.create(req.body).exec().then(
        (results) => {
            res.status(200).send(results);
        },
        (error) => {
            res.status(500).send(error);
        }
    )
});


app.listen(3000);