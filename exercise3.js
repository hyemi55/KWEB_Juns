const express = require('express');
const router = require('./router3');
const port = 3000;

const app = express();

app.set('views',`${__dirname}/views`);
app.set('viewengine','pug');

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, console.log((`Server listeningonport${port}!`)));