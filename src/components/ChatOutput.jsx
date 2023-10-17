import React, { useEffect } from 'react';

function ChatOutput({ messages }) {
    useEffect(() => console.log(messages));
    return (
        <div className='chat-output-container'>
            <div className='messages'>
                {messages.map((message) =>
                    localStorage.getItem('userName') == message.name ? (
                        <p key={message.id}>{message.text}</p>
                    ) : (
                        <p key={message.id}>{message.text}</p>
                    )
                )}
            </div>
        </div>
    );
}

export default ChatOutput;
