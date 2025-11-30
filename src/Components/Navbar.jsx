import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router';

const Navbar = () => {
    const {user,setUser}=useContext(AuthContext)
    
    const handleSignOut=()=>{
       signOut(auth)
       .then(res=>{
         setUser(null)
        
         toast.success('Signed Out')
       })
       .catch(e=>{
        toast.error(e.message)
       })
    }
    return (
        <div className='bg-[#8fbb8f] p-4 flex  justify-between items-center'>
            <div>
                <p className='font-bold text-xl'>🌲 GreenNest</p>
            </div>
            <div className='flex flex-col md:flex-row md:gap-6 items-center md:justify-between'>
                <NavLink to='/' className={({isActive})=>isActive?"text-white":""}>Home</NavLink>
                <NavLink to='/plants' className={({isActive})=>isActive?"text-white":""}>Plants</NavLink>
                {
                    user?<NavLink to='/profile' className={({isActive})=>isActive?"text-white":""}>My Profile</NavLink>
                    :
                    ""
                }
            </div>
            {
                user?
                <div className='z-50'>
                    <details className="dropdown">
<summary className="btn m-1">{user.displayName}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1  py-4 px-6 shadow-sm">
    <li className='items-center'><img src={user.photoURL} className='w-[100px] h-[100px] rounded-full'></img></li>
    <li className='items-center'><button className='py-3  px-6 border rounded-2xl hover:bg-black hover:text-white' onClick={handleSignOut}>Sign Out</button></li>
  </ul>
</details>
                </div>
                :
                <NavLink to='/signup' className={({isActive})=>`py-3  px-6 border rounded-2xl hover:bg-black hover:text-white ${isActive?"bg-black text-white":""}`}>Sign Up </NavLink>
           
            }
            
        </div>
    );
};

export default Navbar;