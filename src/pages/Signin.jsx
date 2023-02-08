import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {

    return (
        <div className='bg-light dark:bg-dark min-h-screen grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start'>
            <div className="phone hidden md:flex w-full h-full justify-end items-center">
                <img className='relative' src="./assets/login.png" alt="login" />
            </div>
            <div className="w-80 my-auto signin-form flex flex-col justify-center items-start gap-4">
                <div className='bg-white w-full p-10 border'>
                    <img className='w-64 mb-6' src="./assets/instagram.svg" alt="instagram" />
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <input className='bg-light w-full py-2 px-4 rounded-md border' type="text" placeholder='Phone number, username or email address' />
                        <input className='bg-light w-full py-2 px-4 rounded-md border' type="password" placeholder='password' />
                        <button className='bg-mianBlue text-white font-bold w-full py-2 px-6 rounded-md '>log in</button>
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
                    Don't have an account? <Link className='text-mianBlue font-bold' to='/register'>Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin