import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        navigate('/Chat');
    };

    return (
        <div className='home-container'>
            <form onSubmit={handleSubmit}>
                <input
                    className='username-input-container'
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                ></input>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Home;
