import React from 'react';

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-400 duration-300 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-e-full'>
                        <img src="" alt="user Profile" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-semibold text-gray-200'>Will Chen</p>
                        <span className='text-xl'>😄</span>
                    </div>
                </div>

            </div>

            <div className='divider my-0 py-0 h-1'></div>

        </>
    );
};

export default Conversation;