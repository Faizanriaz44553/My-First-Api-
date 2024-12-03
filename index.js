import express from 'express';
import comment from './routes/comment.js';
import dotenv from "dotenv"
const app = express();
dotenv.config()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to backend");
});

app.use('/products', comment);


app.get('*', (req, res) => {
    res.status(404).send("Page not found");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
