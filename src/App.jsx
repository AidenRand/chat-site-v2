import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { io } from 'socket.io-client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';

const socket = io.connect('http://localhost:4001');

function App() {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Socket connected', socket.id);
        });

        socket.on('disconnect', (reason) => {
            console.log('Socket disconnected', reason);
        });
    });

    axios.get('http://localhost:4001').then((response) => {
        console.log(response);
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/Chat' element={<Chat socket={socket} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
