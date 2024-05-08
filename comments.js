// Create web server

const express = require('express');
const app = express();
const comments = require('./comments');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use('/comments', comments);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});