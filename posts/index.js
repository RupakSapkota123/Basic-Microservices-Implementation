const express = require('express');
const router = express.Router();

const app = express();

app.use(express.json());

app.listen(9000, () => {
console.log('Server is running on port 9000');
});
