const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
post: {
type: String,
required: [true, 'Post is required'],
},
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
