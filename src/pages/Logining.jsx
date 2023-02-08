import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm';
import SigninForm from '../components/SigninForm';

function Logining() {
    const [isLogin, setIsLogin] = useState(false)
    const signin = () => setIsLogin(false)
    const register = () => setIsLogin(true)
    return (
        <div className='bg-light dark:bg-dark min-h-screen grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start'>
            <div className="phone hidden md:flex w-full h-full justify-end items-center">
                <img className='relative' src="./assets/login.png" alt="login" />
            </div>
            {
                isLogin ? <SigninForm signin={signin} /> : <RegisterForm register={register} />
            }
        </div>
    )
}

export default Logining