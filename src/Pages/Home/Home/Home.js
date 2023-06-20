import React from 'react';

import VerticleTimeline from '../VarticleTimeLine/VerticleTimeline';
import Banner from '../Banner/Banner';
import TitleSection from '../../../Shared/TitleSection/TitleSection';
import TopFood from '../TopFood/TopFood';
import FoodCategori from '../FoodCategoris/FoodCategori';

const Home = () => {
    return (
        <div className='text-center mx-auto '>
             
    <Banner></Banner>
    <TitleSection
      heading={"Categoris"}
      subHeading={"Our Food categories"}
      ></TitleSection>
      <FoodCategori></FoodCategori>
    <TitleSection
      heading={"top"}
      subHeading={"Food Collection"}
      ></TitleSection>
      <TopFood></TopFood>
      <TitleSection
      heading={"top"}
      subHeading={"Chef"}
      ></TitleSection>
    <VerticleTimeline></VerticleTimeline>
   
        </div>
    );
};

export default Home;