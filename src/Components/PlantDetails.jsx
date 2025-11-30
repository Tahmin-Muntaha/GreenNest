import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import { toast } from 'react-toastify';

const PlantDetails = () => {
    const plants=useLoaderData()
    const navigate=useNavigate()
    const {user} =useContext(AuthContext)
    const {plantId}=useParams()
    const p=plants.find((plant)=>parseInt(plant.plantId)===parseInt(plantId))
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

   const handleBookNow=(e)=>{
    e.preventDefault()
    e.target.reset()
    toast.success('Booked..')
   }
    return (
        
           
            <div className='px-40 md:px-133 my-20 '>
            <div className='grid grid-cols-2 gap-4'>
           <div className='flex justify-center items-center'>
            <img src={p.image} className='h-[400px] w-full'></img>
           </div>
           <div className='flex flex-col justify-center'>
            <p className='text-3xl font-bold text-teal-800'>{p.plantName}</p>
            <p >Price : {p.price}</p>
            <p>Available :{p.availableStock}</p>
            <p>Care Level : {p.careLevel}</p>
            <p>Ratinng : {p.rating}</p>
            <p>Provider Name : {p.providerName}</p>
            <p>Description : {p.description}</p>
            <p className='font-bold text-xl'>Book Consultation</p>
            <form onSubmit={handleBookNow}>
                <div>
                    <label>Name : </label><br></br>
                    <input type="text" placeholder='Enter your name' className='border rounded'></input>
                </div>
                <div>
                    <label>Email : </label><br></br>
                    <input type="email" placeholder='Enter your email' className='border rounded'></input>
                </div>
                <button className='py-2 px-6 border rounded-xl hover:bg-black hover:text-white my-3' type="submit">Book Now</button>
            </form>
           </div>
        </div>
        </div>
        );
    

};

export default PlantDetails;