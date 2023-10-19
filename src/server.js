import express from "express";
import {Server} from 'socket.io'
import { createServer } from "node:http";

const app = express();
const port = 4001;

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:4000"
    }
})

io.on('connection', (socket) => {
    console.log("user connected", socket.id)

    socket.on('disconnect', (reason) => {
        console.log("User disconnected", reason);
    })

    socket.on('message', (message) => {
        io.sockets.emit('message', message);
        console.log(message);
    });

})


app.get('/', (req, res) => {
    res.send("Server sending");
})

httpServer.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})