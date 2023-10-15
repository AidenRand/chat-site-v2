import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';

function PageRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Chat' element={<Chat />} />
        </Routes>
    );
}

export default PageRoutes;
