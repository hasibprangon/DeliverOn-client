import { NavLink } from 'react-router';
import DeliverOnLogo from '../DeliverOnLogo/DeliverOnLogo';

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                         <button className='btn bg-[#CAEB66] text-base font-medium'>Be a rider</button>
                    </ul>
                </div>
                <NavLink to='/' className='text-[#03373d]'>
                    <DeliverOnLogo></DeliverOnLogo>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
               <div>
                <button><NavLink to='/login' className="btn">Login</NavLink></button>
                <button className='btn hidden md:inline-block bg-[#CAEB66] text-base font-medium md:ml-2'>Be a rider</button>
               </div>
            </div>
        </div>
    );
};

export default Navbar;