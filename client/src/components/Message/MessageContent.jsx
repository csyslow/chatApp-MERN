import React from 'react';
import Message from './Message';

const MessageContent = () => {
    return (
        <div className='px-4 flex flex-col overflow-auto'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default MessageContent;