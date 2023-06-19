import React from 'react';
import banner from '../../../images/banner.jpg';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

const Banner = () => {
    return (
        <div className='relative '>
                <div className='text-center'>
                <img src={banner} alt="" />
                </div>
                <div className='absolute top-5 md:left-1/3 left-0 text-white'>
                <TypeAnimation
             
             sequence={[
               // Same substring at the start will only be typed out once, initially
               'We produce food for Mice',
               1000, // wait 1s before replacing "Mice" with "Hamsters"
               'We produce food for Hamsters',
               1000,
               'We produce food for Guinea Pigs',
               1000,
               'We produce food for Chinchillas',
               1000
             ]}
             wrapper="span"
             speed={50}
             style={{ fontSize: '2em', display: 'inline-block' }}
             repeat={Infinity}
           />
                </div>
                <div className='absolute md:block hidden   top-[100px]'>
                    <h1 className='text-7xl '>WellCome <br /> to <br />  <CountUp className='text-red-600'
              end={45}
              duration={10}
            ></CountUp><span className='text-white'>Food</span> shop</h1>
                    <h3 className='text-5xl mt-[100px]   text-center mx-52 text-white'>
                    Our fresh produce  <br /> is sourced every morning,  you get the best from us.
                    </h3>
                </div>
        </div>
    );
};

export default Banner;