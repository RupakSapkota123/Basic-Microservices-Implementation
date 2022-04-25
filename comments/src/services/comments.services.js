const {randomBytes} = require('crypto')
// store
const CommentsByPostID = {};

const createComment = async (ids, contents) => {
     const id =  randomBytes(4).toString('hex');
     
     const comments = CommentsByPostID[id] || []

     comments.push({id, contents})

     return CommentsByPostID[ids] = comments
};

const getComments = async (id) => {
 return CommentsByPostID[id] || [];
};

module.exports = {
createComment,
getComments,
};
