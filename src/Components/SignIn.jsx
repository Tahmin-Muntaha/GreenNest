import { Eye, EyeClosed } from 'lucide-react';
import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
    const [see,setSee]=useState(false)
    const {user,setUser}=useContext(AuthContext)
    const provider=new GoogleAuthProvider()
    const emailref=useRef(null)
    const navigate=useNavigate()
    const loc=useLocation()
    const from=loc.state || '/'
    const handleLogIn=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.pass.value
        signInWithEmailAndPassword(auth,email,pass)
        .then(res=>{
            setUser(res.user)
            navigate(from)
            toast.success('Log In Succesful')

        })
        .catch(e=>{
            toast.error(e.message)
        })

    }
    const handleLogInWithGoogle=()=>{
        signInWithPopup(auth,provider)
        .then(res=>{
            setUser(res.user)
            navigate(from)
            toast.success('Log In Succesful')

        })
        .catch(e=>{
            toast.error(e.message)
        })
    }
   const handleForgetPass = (e) => {
    const email=emailref.current.value
    sendPasswordResetEmail(auth, email)
    .then(res=>{
      toast.success('Check your email to reset password')
    })
    .catch(e=>{
      toast.error(e.message)
    })
  };
  
    return (
        <div>
            
            <form className='bg-green-800 text-white w-[75%] md:w-[30%] max-w-[1260px] mx-auto p-8 my-16 rounded-2xl shadow-green-800 shadow-2xl' onSubmit={handleLogIn}>
                    <p className='text-3xl text-center font-bold'>Log In</p>
                    
                    <div className='my-2'>
                        <label className='text-xl'>Email:</label><br></br>
                        <input type="email" name="email" placeholder='Enter Your Email' className='border p-2 rounded-2xl w-[300px]' ref={emailref}></input>
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
                        <div className=''> <button className='py-2 px-6 border rounded-2xl hover:bg-black hover:text-white'>Log In</button></div>
                    <div className=''> <button className='py-2 px-6 border rounded-2xl hover:bg-black hover:text-white' onClick={handleLogInWithGoogle } type='button'>Log In With Google</button></div>
                    </div>
                    <div className='mt-4 mb-2'>
                        <div className=''> <button className='py-2 px-6 border rounded-2xl hover:bg-black hover:text-white' onClick={handleForgetPass} type='button'>Forget Password?</button></div>
                    </div>
                    
                </form>
        </div>
    );
};

export default SignIn;