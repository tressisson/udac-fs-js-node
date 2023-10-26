import express from 'express';

const app = express();
const port = 3000;

// create an express server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});










// ./node_modules/.bin/eslint yourfile.js