'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [hidePassword, setHidePassword] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://ab19-103-3-220-26.ngrok-free.app/api/login', {
                email,
                password,
            });

            if (response.status === 200) {
                const admin = response.data;
                const token = response.data.token;
                localStorage.setItem('jwtToken', token);
                console.log('berhasil login')

            } else {
                console.error('token gagal');
            }
        } catch (error) {
            console.error('Gagal login:', error);
            setErrorMessage('Username atau password salah');
            setIsError(true);
            setHidePassword(false);
            setTimeout(() => {
                setIsError(false);
            }, 5000);
        }
    };

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <div className='grid-cols-1  md:grid-cols-2 grid h-screen mx-auto '>
            <div className=' adjust flex w-full items-center py-2 justify-center md:bg-bg md:rounded-br-[136px] relative '>
                <span className='hidden absolute top-0 md:flex   right-[-150px] bg-bg h-[200px] w-[400px] -z-20'>
                </span>
                <span className=' hidden absolute bottom-0 md:flex right-[-150px] bg-white h-[200px] w-[400px] -z-20'>
                </span>
                <div className='bg-bg p-16 rounded-full'>
                    <Image
                        src={Logo}
                        alt="Logo"
                        className='h-24 w-24 md:h-[300px] md:w-[300px]'
                    />
                </div>
            </div>

            <div className='bg-white flex items-center mx-auto px-10 rounded-tl-[136px] z-40 w-full'>
                <form onSubmit={handleLogin} className='flex flex-col mx-auto max-w-[487px] w-full'>
                    <h2 className='text-3xl pb-16 hidden md:flex mx-auto flex-col items-center gap-2'>

                        Log In
                    </h2>
                    <div className='flex flex-col gap-5 w-full'>
                        <div className='flex flex-col gap-4 rounded-xl'>
                            <label htmlFor='email'>Username/Email</label>
                            <input
                                type='text'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full border-2 max-w-[487px] rounded-md h-[55px] p-2 border-bg'
                                placeholder='Masukkan username / email'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-4 rounded-xl'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type={hidePassword ? 'text' : 'password'}
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full rounded-md border-2 max-w-[687px] h-[55px] p-2 border-bg'
                                placeholder='Masukkan password'
                                required
                            />
                        </div>
                        <div className='flex justify-between w-full text-[19px]'>
                            <div className='flex gap-2 items-center'>
                                <input type='checkbox' name='rememberMe' id='rememberMe' className='h-4 w-4' />
                                <label htmlFor='rememberMe'>Ingatkan Saya</label>
                            </div>
                            <div className='flex gap-2'>
                                <label htmlFor='forgotPassword'>Lupa Kata Sandi?</label>
                                <a href='/verifikasi' className='text-[#660708] font-semibold hover:scale-[1.05] duration-150 transition-all'>Reset</a>
                            </div>
                        </div>
                    </div>
                    <a href="/"  className='bg-grey text-center text-white text-lg p-3 rounded-md w-[194px] mx-auto my-10 hover:bg-[#660708] transition-all duration-150'>Login</a>
                    {/* <button type='submit' className='bg-grey text-center text-white text-lg p-3 rounded-md w-[194px] mx-auto my-10 hover:bg-[#660708] transition-all duration-150'>Login</button> */}
                    <div className='flex gap-2 mx-auto'>
                        <p>Belum Punya Akun?</p>
                        <Link href='/user/register' className='text-[#660708] font-bold hover:scale-[1.05] duration-150 transition-all'>Daftar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
