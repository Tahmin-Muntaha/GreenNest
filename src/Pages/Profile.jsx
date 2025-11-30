import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { Navigate, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Profile = () => {
    const {user,loading}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleUpdate=(e)=>{
        
        const name=e.target.name.value
        const photo=e.target.photo.value
        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
        .then(async()=>{
            await auth.currentUser.reload()
            toast.success('update successfully')
        })
        .catch((e)=>{
            toast.error(e.message)
        })

    }
    console.log(user)
    if(loading) return null
    if(!user) return <Navigate to='/'></Navigate>
    return (
        <div>
            {
            user?
        <div className='mb-20'>

            <div className='flex gap-2 justify-center items-center mt-40 mb-20'>
            <div>
                <img src={user.photoURL}></img>
            </div>
            <div className='font-bold text-2xl'>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
            </div>
           
        </div>
         <form className='ml-40 md:ml-140' onSubmit={handleUpdate}>
               <div>
                 <p className='text-2xl'>Update Profile</p>
                <input type="text" placeholder='New Name' name="name" className='p-4 border rounded w-[400px]'></input>

                <br></br>
                <input type="text" placeholder='New photoURL' name="photo" className='p-4 border rounded my-2  w-[400px]'></input>
                <br></br>
                <button className='px-6 py-2 border rounded hover:bg-black hover:text-white'>Update Now</button>
               </div>

            </form>
        </div>: <Navigate to='/'></Navigate>

        }
        </div>
    );
};

export default Profile;