import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useConversation from '../../store/useConversation';
import useGetMessages from '../../hooks/useGetMessages';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const MessageContent = () => {
    const { selectedConversation } = useConversation();
    const { username } = selectedConversation;

    const { messages } = useGetMessages();
    const lastMsgRef = useRef();

    //scroll down to last message automatically
    useEffect(() => {
        setTimeout(() => {
            lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 1000)
    }, [messages]);

    return (
        <div className='px-4 flex flex-col overflow-auto h-full tex'>
            {
                (messages.length === 0) ? (
                    <div className='flex flex-col justify-center h-full items-center'>
                        <p className='text-gray-200'>Send the message to {username} and start a chat</p>
                        <IoChatbubbleEllipsesSharp className='font-bold text-3xl mt-3 text-gray-300' />
                    </div>

                ) : (
                    messages.map((msg) => {
                        return (
                            <div key={msg._id} ref={lastMsgRef}>
                                <Message msg={msg} />
                            </div>
                        )
                    })
                )

            }


        </div>
    );
};

export default MessageContent;