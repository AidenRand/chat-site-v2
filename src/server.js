import express from "express";
import { Socket } from "socket.io-client";
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Server sending");
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})