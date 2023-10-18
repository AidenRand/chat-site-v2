import React, { useEffect } from 'react';

function ChatOutput({ messages }) {
    useEffect(() => console.log(messages));
    return (
        <div className='chat-output-container'>
            <div className='messages'>
                {messages.map((message) =>
                    localStorage.getItem('userName') == message.name ? (
                        <div id='your-message-div' className='message'>
                            {/* <p>{message.name}: </p> */}
                            <p key={message.id}>{message.text}</p>
                        </div>
                    ) : (
                        <div id='their-message-div' className='message'>
                            {/* <p>{message.name}: </p> */}
                            <p key={message.id}>{message.text}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ChatOutput;
