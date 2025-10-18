import React from 'react';
import logo from '../../../assets/logo.png'

const DeliverOnLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-1.5' src={logo} alt="" />
            <p className='text-3xl font-extrabold -ml-5'>Deliver On</p>
        </div>
    );
};

export default DeliverOnLogo;