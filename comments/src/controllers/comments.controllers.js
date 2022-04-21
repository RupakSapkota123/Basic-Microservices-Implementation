const CommentService = require('../services/comments.service');

const createComment = async (req, res) => {
try {
const comment = await CommentService.createComment(req.body);
res.status(201).json(comment);
} catch (err) {
res.status(400).json(err);
}
};

const getComments = async (req, res) => {
try {
const comments = await CommentService.getComments(req.body);
res.status(200).json(comments);
} catch (err) {
res.status(400).json(err);
}
};

module.exports = {
createComment,
getComments,
};
