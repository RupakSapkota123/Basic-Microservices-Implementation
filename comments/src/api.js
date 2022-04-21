const express = require('express');
const commentsRoutes = require('./comments.routes');

const router = express.Router();

router.use('/post', commentsRoutes);

module.exports = router;
