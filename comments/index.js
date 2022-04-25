const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/api.js');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(9001, () => {
console.log('Server is running on port 9001');
});
