import React from 'react';
import gif from './cafe.webp'

const PrivateHome = () => {
    return (
        <div className='container p-5'>
            <h1 className='display-3 text-light mb-4'>
                Home Sweet Private Home
            </h1>
            <img src={gif} alt='cafe bebe yoda'/>
             
        </div>
    );
};

export default PrivateHome;