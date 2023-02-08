import React from 'react'

function RegisterForm({ register }) {
    return (
        <div className="w-80 my-auto signin-form flex flex-col justify-center items-start gap-4">
            <div className='bg-white w-full p-10 border'>
                <img className='w-64 mb-6' src="./assets/instagram.svg" alt="instagram" />
                <div className='flex flex-col justify-center items-center gap-3'>
                    <input className='bg-light w-full py-2 px-4 rounded-md border' type="text" placeholder='Mobile number or email address' />
                    <input className='bg-light w-full py-2 px-4 rounded-md border' type="text" placeholder='Full Name' />
                    <input className='bg-light w-full py-2 px-4 rounded-md border' type="text" placeholder='Username' />
                    <input className='bg-light w-full py-2 px-4 rounded-md border' type="password" placeholder='password' />
                    <button className='bg-mianBlue text-white font-bold w-full py-2 px-6 rounded-md '>Sign Up</button>
                </div>
            </div>
            <div className='w-80'>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-1/2 bg-gray-300 h-[1px]'></div>
                    <div className='px-4 bg-light text-gray-300'>OR</div>
                    <div className='w-1/2 bg-gray-300 h-[1px]'></div>
                </div>
            </div>
            <div className='w-80 bg-white p-10 border'>
                Have an account? <button onClick={() => register()} className='text-mianBlue font-bold'>Log in</button>
            </div>
        </div>
    )
}

export default RegisterForm