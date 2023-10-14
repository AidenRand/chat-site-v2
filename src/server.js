import express from "express";
import cors from 'cors';
import {Server} from 'socket.io'
import { createServer } from "node:http";

const app = express();

const corsConfig = {
    origin: true,
    credentials: true
}

app.use(cors(corsConfig));

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
})
const port = 3001;

io.on('connection', (socket) => {
    console.log("user connected", socket.id)

    socket.on('disconnect', (reason) => {
        console.log("User disconnected", reason);
    })
})


app.get('/', (req, res) => {
    res.send("Server sending");
})

httpServer.listen(3001, () => {
    console.log("server running on port 3001");
})