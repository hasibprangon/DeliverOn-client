import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <div className='my-3'>
                <h2 className='md:text-[45px] text-[25px] font-extrabold'>Create an account</h2>
                <p className='text-xl font-medium'>Register with Deliver On</p>
            </div>
            <div className="card  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">

                            {/* image*/}
                            <label className="label font-bold">Image</label>
                            {/* {...register("image", { required: true })} */}
                            <input
                                type="file" className="file-input file-input-bordered w-full " />

                            {/* name */}
                            <label className="label font-bold">Name</label>
                            <input type="text" {...register('name', { required: true })} className="input" placeholder="Name" required />


                            {/* email */}
                            <label className="label font-bold">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" required />

                            {/* pass */}
                            <label className="label font-bold">Password</label>
                            <input type="password"
                                {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" required />
                             {
                                errors.password?.type === 'minLength' && <p className='text-red-600 md:text-[15px] text-[10px]'>
                                    Password must be 6 character
                                </p>
                            }

                            <button className="btn bg-[#CAEB66] mt-4">Register</button>
                        </fieldset>
                    </form>
                    <h2>Already have an account? Please back to <NavLink to='/login'> <span className=' text-base font-extrabold text-[#CAEB66]'>Login</span></NavLink> </h2>
                    <div className="divider">OR</div>
                    <button className='btn btn-soft'><FcGoogle /> Register with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;