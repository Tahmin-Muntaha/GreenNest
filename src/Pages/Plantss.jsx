import React from 'react';
import { useLoaderData } from 'react-router';
import Plant from '../Components/Plant';

const Plantss = () => {
    const plants=useLoaderData()
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-16'>
            {
                plants.map(p=><Plant p={p}></Plant>)
            }
        </div>
    );
};

export default Plantss;