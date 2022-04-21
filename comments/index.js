const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/comments', (err) => {
if (err) {
console.log('error >>>', err);
} else {
console.log('Connected to Database.....');
}
});

app.use(express.json());
app.use(bodyParser);

// app.use('/api', apiRoutes);

app.listen(9001, () => {
console.log('Server is running on port 9001');
});
