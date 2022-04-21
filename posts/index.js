const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/posts', (err) => {
if (err) {
console.log('error >>>', err);
} else {
console.log('Connected to Database.....');
}
});

const app = express();

app.use(express.json());

// server port
app.listen(9000, () => {
console.log('Server is running on port 9000');
});
