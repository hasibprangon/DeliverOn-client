import React from 'react';
import { Outlet } from 'react-router';
import img from '../../src/assets/authImage.png'
import DeliverOnLogo from '../pages/shared/DeliverOnLogo/DeliverOnLogo';
import { NavLink } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="p-12 max-w-7xl mx-auto rounded-2xl my-5">
            <NavLink to='/'><DeliverOnLogo></DeliverOnLogo></NavLink>
            <div className="hero-content mt-3 md:mt-0 flex-col-reverse lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;