import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

function Chat({ socket }) {
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     socket.on('message', (data) => console.log(data));
    // });
    return (
        <div>
            <ChatInput socket={socket} />
            {/* <ChatOutput messages={messages} /> */}
        </div>
    );
}

export default Chat;
