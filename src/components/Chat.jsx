import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

function Chat({ socket }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (message) => setMessages([...messages, message]), [
            socket,
            messages,
        ]);
    });
    return (
        <div>
            <ChatInput socket={socket} />
            <ChatOutput messages={messages} />
        </div>
    );
}

export default Chat;
