import React from 'react';
import { TbLogout2 } from "react-icons/tb";

const LogoutBtn = () => {
    return (
        <div className='mt-auto text-gray-300'>
            <button>
            <TbLogout2 className='w-6 h-6 mt-3'/>
            </button>
        </div>
    );
};

export default LogoutBtn;
