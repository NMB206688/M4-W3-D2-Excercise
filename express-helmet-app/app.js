"use strict";

const express = require('express');
const helmet = require('helmet');
const app = express();


app.use(helmet())

app.get('/', (req, res) => {
    console.log('route \'/\' called!')
    res.send({res: 'sending 200 as response'});
});

app.listen(3000)
console.log('Server running on http://localhost:3000');
