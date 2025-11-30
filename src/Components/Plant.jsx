import React from 'react';

const Plant = ({p}) => {
    
    return (
        <div className='p-8 shadow-2xl rounded'>
            <div>
                <img src={p.image} className='h-[300px] w-full'></img>
            </div>
            <div className='text-xl font-bold text-teal-600'>
                <p>{p.plantName}</p>
                
            </div>
            <div className='flex justify-between items-center'>
                <p>{p.price}$</p>
                <p>{p.rating}⭐</p>
            </div>
            <div>
                <button className='px-3 py-2 my-2 border rounded hover:bg-black hover:text-white'>View Details</button>
            </div>
        </div>
    );
};

export default Plant;


// image name price rating view details button