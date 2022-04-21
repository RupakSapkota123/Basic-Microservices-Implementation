const Post = require('../posts.models.js');
const createPost = async (post) => {
const postCreate = await Post.create(post);
return postCreate;
};
const createPostById = async (id, post) => {
// create post by id
const postID = Post.findById(id);
// const postCreate = await Post.create({ post });
const postCreate = await Post.create(post);
postID.post.push(postCreate);
await postID.save();
return postID;
};

const getPosts = async (posts) => {
const postBody = await Post.find({ posts });
return postBody;
};

module.exports = {
createPost,
createPostById,
getPosts,
};
