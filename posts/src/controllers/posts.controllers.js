const postService = require('../services/posts.services.js');

const createPost = async (req, res) => {
try {
const { id } = req.params;
const post = await postService.createPost(req.body);
res.status(201).json(post);
} catch (err) {
res.status(500).json(err);
}
};
const createPostById = async (req, res) => {
try {
const { id } = req.params;
const post = await postService.createPostById(id, req.body);
res.status(201).json(post);
} catch (err) {
res.status(500).json(err);
}
};

const getPosts = async (req, res) => {
try {
const posts = await postService.getPosts(req.body);
res.status(200).json(posts);
// const { post } = req.body;
} catch (err) {
res.status(500).json(err);
}
};

module.exports = {
createPost,
createPostById,
getPosts,
};
