const { randomBytes} = require('crypto')

// store
const Posts = {};

const createPost = async(title) => {
          const id =  randomBytes(4).toString('hex');
            return Posts[id] = {
                id, title
           };

 }

 const getPosts = async() => {
      return Posts
 }

 module.exports = {
      createPost,
      getPosts
 }