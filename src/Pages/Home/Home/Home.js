import React from 'react';

import VerticleTimeline from '../VarticleTimeLine/VerticleTimeline';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='text-center mx-auto '>
             
    <Banner></Banner>

    <VerticleTimeline></VerticleTimeline>
        </div>
    );
};

export default Home;