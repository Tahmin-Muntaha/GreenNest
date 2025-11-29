import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const plantSlides = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1665408511793-51dc25f82b2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slogan: 'Breathe cleaner air every day.',
  },
  {
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fHww',
    slogan: 'Reduce stress and boost your mood.',
  },
  {
    image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb29yJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
    slogan: 'Increase focus and productivity naturally.',
  },
  
];


const Swipper = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {plantSlides.map((plant, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-green-700 mb-2">
                  {plant.name}
                </h2>
                <p className="text-gray-600 font-bold">{plant.slogan}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipper;
