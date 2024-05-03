import React from 'react';

const Conversation = ({friend, isLast}) => {
    const {username, profilePicUrl} = friend;
    // const {selectedConversation, setSelectedConversation} = useConversation();
    // const isSelected = selectedConversation?._id === friend._id
    return (
        <>
            <div className={`flex gap-2 items-cente duration-300 rounded p-2 py-1 cursor-pointer hover:bg-gray-400 rounded-2xl`}
            >
                <div className='avatar online'>
                    <div className='w-12 rounded-e-full'>
                        <img src={profilePicUrl} alt="user Profile" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-semibold text-gray-200'>{username}</p>
                        <span className='text-xl'>😄</span>
                    </div>
                </div>

            </div>
            {/* last entry won't have a divider */}
            {!isLast && <div className='divider my-0 py-0 h-1'></div>} 

        </>
    );
};

export default Conversation;