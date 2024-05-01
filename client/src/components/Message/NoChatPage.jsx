import React from 'react';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const NoChatPage = () => {
    return (
            <div className='md:min-w-[450px] sm:min-w-[300px] flex justify-center items-center'>
                <div className='h-full flex flex-col justify-center items-center font-bold text-gray-300 leading-loose'>
                    <h1>Welcome, Will Chen 👋</h1>
                    <p>Please select a user and start a chat</p>
                    <IoChatbubbleEllipsesOutline className='text-6xl mt-3'/>
                </div>
            </div>
    );
};

export default NoChatPage;