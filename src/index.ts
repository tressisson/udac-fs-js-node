import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

// create an express server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

export default app;