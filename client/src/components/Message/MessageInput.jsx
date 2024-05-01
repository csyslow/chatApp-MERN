import React from 'react';
import { FiSend } from "react-icons/fi";

const MessageInput = () => {
    return (
            <form action="" className='px-4 my-3 relative'>
                <div className='w-full '>
                <input type="text" placeholder='Send Message...' className='border text-sm rounded-lg
                w-full p-2.5 bg-gray-300 border-gray-600 text-gray-800'/>
                </div>
                <button type="submit">
                    <FiSend className='ml-3 text-blue-500 w-6 h-6 absolute inset-y-2.5 end-6 hover:text-pink-400'/>
                </button>
            </form>
    );
};

export default MessageInput;