import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';


const Login = () => {
    return (
        <div>
            <div className='my-3'>
                <h2 className='text-[45px] font-extrabold'>Welcome Back</h2>
                <p className='text-xl font-medium'>Login with Deliver On</p>
            </div>
            <div className="card  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#CAEB66] mt-4">Login</button>
                        </fieldset>
                    </form>
                    <h2>Don’t have any account? Please <NavLink> <span className=' text-base font-extrabold text-[#CAEB66]'>Register</span></NavLink> </h2>
                    <div className="divider">OR</div>
                    <button className='btn btn-soft'><FcGoogle /> Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;