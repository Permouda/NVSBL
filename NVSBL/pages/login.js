import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import Footer from '../components/Footer'
import {toast} from 'react-toastify';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Apply = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e)=>{
        e.preventDefault();
        // backend here
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
        .then(data=>{
            if(data.status==='success'){
                toast('You are Logged in')
                localStorage.setItem('LinkTreeToken', data.token);
                router.push('/dashboard');
            }
            if(data.status === 'not found'){
                toast.error('User not found');
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
        <section className={styles.background + " min-h-screen flex justify-center items-center"}>
            <div className="main">
                <div className="mx-3 content bg-yellow-1 p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-center">You're now among top creators</h1>
                <p className='text-center'>Access your Dashboard</p>
                <p className='text-center py-5 font-bold text-blue'>Start building your Hub</p>
                <form onSubmit={handleLogin} className='flex flex-col gap-4 text-lg mt-5'>
                    <span className='input-per flex flex-row shadow-md  px-3 py-2 rounded-md focus:outline-none'>
                    {/* email svg call */}
                    <img className='w-6 mr-2' src="/svg/email.svg" alt="" />
                    <input value={email} onChange={e=>setEmail(e.target.value)} className='bg-transparent focus:outline-none' type="email" placeholder="Enter your email" required/>
                    </span>
                    <input value={password} onChange={e=>setPassword(e.target.value)} className=' input-per shadow-md px-3 py-2 rounded-md focus:outline-none' type="password" placeholder='Set a password' required/>
                    {/* Boutton Login */}
                    <input className='btn-per mt-3 tracking-widest font-bold uppercase  py-2 rounded-lg cursor-pointer' type="submit" value="Login" />
                </form>
                </div>
                <h4 className='text-center text-white pt-3'>New Here? <Link className='font-bold text-yellow' href="/apply">Apply</Link></h4>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Apply