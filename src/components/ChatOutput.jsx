import React from 'react';

function ChatOutput({ messages }) {
    return (
        <div className='chat-output-container'>
            <div className='messages'>
                {messages.map((message) =>
                    localStorage.getItem('userName') == message.name ? (
                        <p>{message.text}</p>
                    ) : (
                        <p>{message.text}</p>
                    )
                )}
            </div>
        </div>
    );
}

export default ChatOutput;
