import { FiSearch } from 'react-icons/fi'
const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search user...' className='input input-bordered h-10 border text-sm 
                w-full p-2.5 bg-gray-300 border-gray-200 text-gray-800 rounded-full' />
            <button type='submit' className='btn btn-circle bg-pink-400 text-white '>
                <FiSearch className='w-6 h-6'/>
            </button>
        </form>
    );
};

export default SearchInput;