import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-[#a6dda6] p-4 flex  justify-between items-center'>
            <div>
                <p className='font-bold text-xl'>🌲 GreenNest</p>
            </div>
            <div className='flex flex-col md:flex-row md:gap-6 items-center md:justify-between'>
                <NavLink to='/' className={({isActive})=>isActive?"text-white":""}>Home</NavLink>
                <NavLink to='/plants' className={({isActive})=>isActive?"text-white":""}>Plants</NavLink>
                <NavLink to='/profile' className={({isActive})=>isActive?"text-white":""}>My Profile</NavLink>
            </div>
            <NavLink to='/signin' className='py-3  px-6 border rounded-2xl hover:bg-black hover:text-white'>Log In </NavLink>
            <div></div>
        </div>
    );
};

export default Navbar;