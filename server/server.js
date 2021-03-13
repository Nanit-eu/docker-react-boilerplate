'use strict';

const express = require('express');
const cors = require("cors");
const logger = require("morgan");
const path = require('path');
const bodyParser = require("body-parser");

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors());
app.use(logger("dev"));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});
app.use(express.static(path.join(__dirname, '.')));

app.get('/health-check', (req, res) => {
    res.send('alive');
});
app.get('/api/eligibility', (req, res) => {
    res.send('1');
});
app.get('/api/offer_data', (req, res) => {
    res.send(JSON.stringify({default:'default'}));
});




//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send_data', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);