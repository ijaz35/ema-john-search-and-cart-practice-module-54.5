import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.png';


const Login = () => {
    return (
        <div className='mt-24 '>
            <div className='w-[500px] h-[650px]  mx-auto  rounded-xl bg-orange-200 relative'>
                <div className="w-[500px] h-[650px] border-[1px] border-gray-400 mx-auto px-11 py-9 rounded-xl bg-white absolute bottom-3 left-3">
                    <h2 className='text-3xl text-center mb-7'>Login</h2>
                    <div className=''>
                        <p className='text-[17px] ml-2 mb-2'>Email</p>
                        <input className='w-full border-[1px] border-gray-400 p-3 rounded-lg' type="email" />
                    </div>
                    <div>
                        <p className='text-[17px] ml-2 mb-2 mt-5'>Password</p>
                        <input className='w-full border-[1px] border-gray-400 p-3 rounded-lg' type="password" name="" id="" />
                    </div>

                    <button className='w-full bg-orange-200 py-4 rounded-lg mt-14'>
                        <p className='text-xl '>Login</p>
                    </button>
                    <p className='text-sm text-center mt-2'>Already have an account? <Link to="/signup">
                        <small className='text-orange-400 text-sm'>Create New Account</small>
                    </Link> </p>
                    <div className='flex items-center justify-center mt-[29px]'>
                        <div className='w-36 h-[2px] bg-gray-300 '></div>
                        <p className='mx-[26px] text-lg'>or</p>
                        <div className='w-36 h-[2px] bg-gray-300 '></div>
                    </div>
                    <button className='w-full flex items-center justify-center border-[1px] border-gray-400 py-4 rounded-lg mt-[53px]'>
                        <img className='w-8 mr-[6px]' src={googleLogo} alt="google logo" />
                        <p>Continue with google</p>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;