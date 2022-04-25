const mongoose = require('mongoose');


const commentsSchema = mongoose.Schema({
     comments: string
})

const Comments = mongoose.model('Comments', commentsSchema);

module.exports =  Comments;