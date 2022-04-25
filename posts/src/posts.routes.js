const express = require('express');
const postController = require('./controllers/posts.controllers.js');

const router = express.Router();

router.route('/').get(postController.getPosts).post(postController.createPost);


module.exports = router;
