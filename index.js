const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database')
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database: ', err);
    } else {
        console.log('Connected to database: ', config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
});
  
app.listen(3000, () => {
    console.log('Listening to port 3000');
});