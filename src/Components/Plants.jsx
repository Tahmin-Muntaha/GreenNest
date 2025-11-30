import React from 'react';
import Plant from './Plant';

const Plants = ({plants}) => {
    
    return (
        <div className=' my-10'>
            <h1 className='text-6xl font-bold text-center'>🌲Plants🌲</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-8'>
            {
                plants.map(p=>
                    <Plant key={p.id} p={p}></Plant>
                )
            }
        </div>
        </div>
    );
};

export default Plants;