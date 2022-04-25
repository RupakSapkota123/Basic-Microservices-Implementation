const CommentService = require('../services/comments.services.js');

const createComment = async (req, res) => {
try {
const { id } = req.params;
const comment = await CommentService.createComment(id, req.body);
res.status(201).json(comment);
} catch (err) {
res.status(400).json(err);
}
};

const getComments = async (req, res) => {
try {
const { id } = req.params;
const comments = await CommentService.getComments(id);
res.status(200).json(comments);
} catch (err) {
res.status(400).json(err);
}
};

module.exports = {
createComment,
getComments,
};
