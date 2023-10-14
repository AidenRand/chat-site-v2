import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { io } from 'socket.io-client';

function App() {
    useEffect(() => {
        const socket = io.connect('http://localhost:3001');
        socket.on('connect', () => {
            console.log('Socket connected', socket.id);
        });

        socket.on('disconnect', (reason) => {
            console.log('Socket disconnected', reason);
        });
    });

    axios.get('http://localhost:3001').then((response) => {
        console.log(response);
    });

    return <></>;
}

export default App;
