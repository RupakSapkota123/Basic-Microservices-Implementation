const Comments = require('../comments.models.js');

const createComment = async (commentBody) => {
try {
const comment = await Comments.create(commentBody);
return comment;
} catch (err) {
throw err;
}
};

const getComments = async (commentBody) => {
try {
const comments = await Comments.find(commentBody);
return comments;
} catch (err) {
throw err;
}
};

module.exports = {
createComment,
getComments,
};
