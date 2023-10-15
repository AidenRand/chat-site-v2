import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Home() {
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className='home-container'>
            <form onSubmit={handleSubmit}>
                <input
                    className='username-input-container'
                    type='text'
                    value={userName}
                ></input>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Home;
