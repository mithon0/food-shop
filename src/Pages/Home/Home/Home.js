import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import VerticleTimeline from '../VarticleTimeLine/VerticleTimeline';

const Home = () => {
    return (
        <div className='text-center '>
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

    <VerticleTimeline></VerticleTimeline>
        </div>
    );
};

export default Home;