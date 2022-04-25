const express = require('express');
const commentsRoutes = require('./comments.routes');

const router = express.Router();

router.use('/posts', commentsRoutes);

module.exports = router;
