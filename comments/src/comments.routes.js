const express = require('express');
const commentController = require('./controllers/comments.controllers.js');
const router = express.Router();

router
.route('/:id/comments')
.get(commentController.getComments)
.post(commentController.createComment);

module.exports = router;
