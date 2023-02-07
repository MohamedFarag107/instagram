import React from 'react'

function Signin() {

    return (
        <div className='bg-light dark:bg-dark min-h-screen grid gap-4 grid-cols-1 md:grid-cols-2'>
            <div className="phone w-full h-full flex justify-end items-center">
                <img className='relative' src="./assets/login.png" alt="login" />
            </div>
            <div className="signin-form flex  justify-start items-center">
                <div className='bg-white p-10 border'>
                    <img className='w-64 mb-6' src="./assets/instagram.svg" alt="instagram" />
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <input className='bg-light w-full py-2 px-4 rounded-md border' type="text" placeholder='Phone number, username or email address' />
                        <input className='bg-light w-full py-2 px-4 rounded-md border' type="password" placeholder='password' />
                        <button className='bg-mianBlue text-white font-bold w-full py-2 px-6 rounded-md '>log in</button>
                    </div>
                </div>
                    <div className='bg-white p-10 border'>
                        <img className='w-64 mb-6' src="./assets/instagram.svg" alt="instagram" />
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <input className='bg-light w-full py-2 px-4 rounded-md border' type="text" placeholder='Phone number, username or email address' />
                            <input className='bg-light w-full py-2 px-4 rounded-md border' type="password" placeholder='password' />
                            <button className='bg-mianBlue text-white font-bold w-full py-2 px-6 rounded-md '>log in</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Signin