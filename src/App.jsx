import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    axios.get('http://localhost:3001').then((response) => {
        console.log(response);
    });

    return <></>;
}

export default App;
