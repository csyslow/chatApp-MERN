import React from 'react';

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
            backdrop-blur-lg bg-opacity-10 rounded-3xl'>
                <h1 className='text-center text-3xl text-gray-300 font-semibold h-full w-full bg-brown-300 rounded-md bg-clip-padding'>
                    <span className='text-pink-400 mr-2'>ChatApp</span>
                    <span>Login</span>
                </h1>

                <form className='text-gray-300'>
                    <div className='text-gray-300'>
                        <label htmlFor="username" className='label p-2'>
                            <span className='text-base'>Username</span>
                        </label>
                        <input id='username' type="text" placeholder='Enter your username' className='w-full input input-bordered h-10 opacity-50 text-gray-900' />
                    </div>
                    <div className='text-gray-300'>
                        <label htmlFor="password" className='label p-2'>
                            <span className='text-base'>Password</span>
                        </label>
                        <input id='password' type="text" placeholder='Enter your password' className='w-full input input-bordered h-10 opacity-50 text-gray-900' />
                    </div>
                    <div className='pt-4'>
                        <span className='mr-2'>{"Don't"} have an account yet?</span>
                        <a href="" className='hover:text-blue-700'>Sign Up Here</a>
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Login;