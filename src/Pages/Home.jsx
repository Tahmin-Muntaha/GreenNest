import React from 'react';
import Swipper from '../Components/swipper'
import Plants from '../Components/Plants';
import { useLoaderData } from 'react-router';

{
 
  const GreenExperts= [
    {
      "name": "",
      "specialization": "",
      "image": "https://example.com/images/ayesha.jpg"
    },
    {
      "name": " ",
      "specialization": "",
      "image": "https://example.com/images/rana.jpg"
    },
    {
      "name": "",
      "specialization": "",
      "image": "https://example.com/images/mina.jpg"
    }
  ]
}

const Home = () => {

    const plants=useLoaderData()
    console.log(plants)
    return (
        
        <div>
            <Swipper></Swipper>
            <Plants plants={plants}></Plants>


            <div className='md:grid grid-cols-2 mb-10 p-4'>
                <div className='bg-green-900 hidden md:block p-4'>
                    <img src="https://plus.unsplash.com/premium_vector-1682303433900-6d0bdbdd2e0b?q=80&w=2204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                </div>
                <div className='bg-[#a6dda6] p-8'>
                    <p className='font-bold text-xl'>Tips:</p>
                    <ul className='pl-12 text-teal-900 font-semibold'>
                        <li>Water your plants once every 3-4 days, depending on soil dryness.</li>
                        <li>Mist indoor plants lightly to maintain humidity.</li>
                        <li>Check soil moisture with your finger before watering.</li>
                        
                    </ul>
                    <p className='font-bold text-xl mt-4'>Sunlight:</p>
                    <ul className='pl-12 text-teal-900 font-semibold'>
                        <li>Place near a bright window but avoid direct afternoon sun.</li>
                        <li>Rotate plants weekly to ensure even growth.</li>
                        <li>Avoid placing near drafty windows or AC vents.</li>
                    </ul>
                    <p className='font-bold text-xl mt-4'>Fertilizer:</p>
                    <ul className='pl-12 text-teal-900 font-semibold'>
                        <li>Use a balanced liquid fertilizer once a month.</li>
                        <li>Use slow-release granules during growing season.</li>
                        <li>Feed with organic compost every 6-8 weeks.</li>
                    </ul>
                </div>
            </div>

            <div className='mb-10'>
                <p className='text-5xl font-semibold text-center'>Meet Our Experts:</p>
                <div className='grid grid-cols-3 p-4 md:pl-12 shadow-xl gap-2 md:gap-8'>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZex-8uTV7Kzpxg7cLFXP6blh9pe5GzijiRA&s" className='h-[200px]'></img>
                        <p className='text-xl'>Ayesha Rahman</p>
                        <p className='text-teal-600'>Indoor plant care and succulents</p>
                    </div>
                     <div className=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZex-8uTV7Kzpxg7cLFXP6blh9pe5GzijiRA&s" className='h-[200px]'></img>
                        <p className='text-xl'>Rana Das</p>
                        <p className='text-teal-600'>Tropical plants and hydroponics</p>
                    </div>
                     <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZex-8uTV7Kzpxg7cLFXP6blh9pe5GzijiRA&s" className='h-[200px]'></img>
                        <p className='text-xl'>Mina Karim</p>
                        <p className='text-teal-600'>Herbs and small garden maintenance</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;