const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const axios = require('axios');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/post/:postId', async(req, res) => {
    const postId = req.params.postId;

    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

    const postsRes = await axios.get(postUrl);
    const commentsRes = await axios.get(commentsUrl);


    let posts = postsRes.data;
    posts.comments = commentsRes.data;

   return res.render('post', posts);
});

app.listen(3000, () => {
     console.log('Server is running on port 3000');
});