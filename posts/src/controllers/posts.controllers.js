
const postService = require('../services/post.service.js')

const createPost = async (req, res) => {
try {
  const post = await postService.createPost(req.body)
  res.status(200).json(post)
} catch (err) {
res.status(500).json(err);
}
};

const getPosts = async (req, res) => {
try {
const posts = await postService.getPosts();
res.status(200).send(posts);
// const { post } = req.body;
} catch (err) {
res.status(500).json(err);
}
};

module.exports = {
createPost,
getPosts,
};
