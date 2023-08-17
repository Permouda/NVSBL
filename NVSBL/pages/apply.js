import React, { useState} from 'react'
import styles from '../styles/apply.module.css'
import Footer from '../components/Footer'
import {toast} from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Apply = () => {

  
  const router = useRouter();
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryChange = (e) =>{
    setCategory(e.target.value);
  }

  const handleRegister = (e)=>{
    e.preventDefault();
    if(!category) return toast.error('Add a category');
    // backend part
    fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        handle,
        email,
        password,
        category
      })
    }).then(res => res.json())
    .then(data=>{
      console.log(data);
      if(data.status==='success'){
        toast('You are registered successfully')
        localStorage.setItem('LinkTreeToken', data.token);
        setSubmitted(true);
        router.push('/login');
      }
    }).catch(err=>{
      toast.error('Try a different username');
    });  

  }
  return (
    <>
<section className={styles.background + " min-h-screen flex justify-center items-center"}>
        <div className="main">
            <div className="content bg-yellow-1 p-8 rounded-2xl shadow-lg">
              <h1 className="text-2xl font-bold text-center">Join NVSBL</h1>
              <p className='text-center'>Create Your Profile</p>
              {/* <p className='text-center py-5 font-bold text-gray-500'>Start building your Hub</p> */}
                {/* Form */}
                <form onSubmit={handleRegister} className='flex flex-col gap-4 text-lg mt-5'>

                {/* Social Handle */}
                  <span className='input-per flex flex-row shadow-md border-blue px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/social.svg" alt="" />
                    <input value={handle} onChange={e=>setHandle(e.target.value)} className='bg-transparent focus:outline-none' type="text" placeholder="Social Handle" required/>
                  </span>
                  {/* Email and password */}
                  <input value={email} onChange={e=>setEmail(e.target.value)} className='input-per border-blue  shadow-md px-3 py-2 rounded-md focus:outline-none' type="email" placeholder="Enter your email" required/>
                  <input value={password} onChange={e=>setPassword(e.target.value)} className='input-per border-blue shadow-md px-3 py-2 rounded-md focus:outline-none' type="password" placeholder='Set a password' required/>
                
                <h5 className='text-sm mt-6 '>Account Type:</h5>
                  <span className="flex">
                    <label className="flex flex-row mr-3 ">
                      <input type="checkbox" className="" value="Creator" checked={category==='Creator'} onChange={handleCategoryChange} />
                      <p className='pl-2'>Creator</p>
                    </label>
                    <label className="flex flex-row mr-3">
                      <input type="checkbox" className="" value="Agency" checked={category==='Agency'} onChange={handleCategoryChange} />
                      <p className='pl-2'>Agency</p>
                    </label>
                    <label className="flex flex-row mr-3">
                      <input type="checkbox" className="" value="Brand" checked={category==='Brand'} onChange={handleCategoryChange} />
                      <p className='pl-2'>Brand</p>
                    </label>
                  </span>
                  <input className='btn-per mt-3 tracking-widest font-bold uppercase text-white py-2 rounded-lg cursor-pointer' type="submit" value="Apply" />
                </form>
            </div>
            <h4 className='text-center text-white pt-3'>Already have an account? <Link className='font-bold text-yellow' href="/login">Login</Link></h4>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  )
}

export default Apply