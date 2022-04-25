const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./src/api');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// routing for posts
app.use('/api', apiRoutes);

// server port
app.listen(9000, () => {
console.log('Server is running on port 9000');
});

module.exports = app;