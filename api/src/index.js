const express = require('express');
const app = express();
const { port } = require('./configuration');
const twitter = require('./routes/twitter');

app.use('/twitter', twitter);

app.listen(port, () => console.log(`Server started on port ${port}`));