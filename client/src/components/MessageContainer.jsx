import React from 'react';
import MessageHeader from './Message/MessageHeader';
import MessageContent from './Message/MessageContent';
import MessageInput from './Message/MessageInput'
import NoChatPage from './Message/NoChatPage';

const MessageContainer = () => {
    const selectedAChat = false;

    return (
        selectedAChat ? (
            <div className='md:min-w-[450px] sm:min-w-[300px] flex flex-col justify-center' >
                <MessageHeader />
                <MessageContent />
                <MessageInput />
            </div >
        ) : (
            <div className='md:min-w-[450px] sm:min-w-[300px] flex flex-col justify-center'>
                <NoChatPage />
            </div>
        )


    );
};

export default MessageContainer;