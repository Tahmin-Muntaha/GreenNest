import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const navigate=useNavigate()
    const [see,setSee]=useState(false)
    const provider=new GoogleAuthProvider
    
    const handleSignUp=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.pass.value
        const reg=/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
        if(!reg.test(pass)){
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
            return
        }
        createUserWithEmailAndPassword(auth,email,pass)
        .then((res)=>{
            navigate('/')
            toast.success('Sign Up Successful')
        })
        .catch((e)=>{
            toast.error(e.message)
            console.log(e)
        })
        
    }
    const  signInWithGoogle=(e)=>{
        e.preventDefault()
        signInWithPopup(auth,provider)
        .then ((res)=>{
            navigate('/')
            toast.success('Sign Up Successful')
        })
        .catch((e)=>{
            toast.error(e.message)
        })
    }
    return (
        <form className='bg-green-800 text-white w-[75%] md:w-[30%] max-w-[1260px] mx-auto p-8 my-16 rounded-2xl shadow-green-800 shadow-2xl' onSubmit={handleSignUp}>
                    <p className='text-3xl text-center font-bold'>Sign Up</p>
                    <div className='my-2'>
                        <label className='text-xl'>Name:</label><br></br>
                        <input type="text" name="name" placeholder='Enter Your Name' className='border p-2 rounded-2xl w-[300px]'></input>
                    </div>
                    <div className='my-2'>
                        <label className='text-xl'>Email:</label><br></br>
                        <input type="email" name="email" placeholder='Enter Your Email' className='border p-2 rounded-2xl w-[300px]'></input>
                    </div>
                    <div className='my-2'>
                        <label className='text-xl'>Photo URL:</label><br></br>
                        <input type="text" name="photo" placeholder='Enter Your Photo URL' className='border p-2 rounded-2xl w-[300px]'></input>
                    </div>
                    <div className='my-2 absolute'>
                        <label className='text-xl'>Password:</label><br></br>
                        <input type={see?"text":"password"} name="pass" placeholder='Enter Your Password' className='border p-2 rounded-2xl w-[300px]'></input>
                        <div className='relative left-60 bottom-8' onClick={()=>setSee(!see)}>
                            {
                                see?<Eye></Eye>:<EyeClosed></EyeClosed>
                            }
                        </div>
                    </div>
                    <div className='flex mt-26 gap-4'>
                        <div className=''> <button className='py-2 px-6 border rounded-2xl hover:bg-black hover:text-white'>Sign Up</button></div>
                    <div className=''> <button className='py-2 px-6 border rounded-2xl hover:bg-black hover:text-white' onClick={signInWithGoogle } type='button'>Sign Up With Google</button></div>
                    </div>
                    <div className='m-2'>
                        <small>Already have an account?</small><span className='underline' onClick={()=>navigate('/signin')}> Sign In</span>
                    </div>
                </form>
    );
};

export default SignUp;