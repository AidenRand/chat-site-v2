import React, { useState } from 'react';

function ChatInput({ socket }) {
    const [message, setMessages] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem('userName')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                SocketID: socket.id,
            });
            console.log(socket.id);
        }
    };

    return (
        <div className='chat-input-container'>
            <form onSubmit={handleSend}>
                <input
                    className='chat-input'
                    type='text'
                    value={message}
                    onChange={(e) => setMessages(e.target.value)}
                />
                <button>Send</button>
            </form>
        </div>
    );
}

export default ChatInput;
