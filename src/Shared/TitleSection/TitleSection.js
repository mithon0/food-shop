import React from 'react';

const TitleSection = ({heading,subHeading}) => {
    return (
        <div  style={{borderRadius:'0px 200px 0px 200px'}} className='text-center mx-auto w-1/3 bg-green-400'>
            <div className='divider'/>
            <h1 className='text-red-600 '>--{heading}--</h1>
            <h1 className='text-3xl font-bold text-black'>{subHeading}</h1>
            <div className='divider'/>
        </div>
    );
};

export default TitleSection;