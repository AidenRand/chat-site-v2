import express from "express";
import {Server} from 'socket.io'
import { createServer } from "node:http";

const app = express();
const port = 3001;

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://192.168.254.170:3000"
    }
})

io.on('connection', (socket) => {
    console.log("user connected", socket.id)

    socket.on('disconnect', (reason) => {
        console.log("User disconnected", reason);
    })

    socket.on('message', (data) => console.log(data));

})


app.get('/', (req, res) => {
    res.send("Server sending");
})

httpServer.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})