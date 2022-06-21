const express = require('express');
const app = express();
const axios = require('axios').default;


app.get('/getPostWithComments', async (req, res)=> {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');

    console.log(posts.data[1]);
    console.log(comments.data[1]);

    const postData = posts.data;
    const commentData = comments.data;

    postData.map(post => {
        post.comments = commentData.filter(item => item.postId === post.id);
    })

    return res.send(postData);
});


app.listen(3000, function() {
    console.log('listening on port 3000');
});