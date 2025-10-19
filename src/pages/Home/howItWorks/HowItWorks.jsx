import bookingIcon from '../../../assets/bookingIcon.png'
const HowItWorks = () => {
    return (
        <div className="mb-5 max-w-6xl mx-auto">
            <h2 className="font-extrabold text-3xl mb-5 text-[#03373d] ">How it Works</h2>

            <div className='lg:flex gap-5 '>
                <div className="bg-[#CAEB66] lg:w-96 shadow-lg hover:shadow-2xl rounded-3xl p-5 lg:mb-0 md:mb-0 mb-3" data-aos="fade-right">
                    <figure>
                        <img
                            src= {bookingIcon} className='mx-5'/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-xl">
                            Booking Pick & Drop
                        </h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>

                <div className="bg-[#CAEB66] lg:w-96 shadow-lg rounded-3xl p-5 lg:mb-0 md:mb-0 mb-3 hover:shadow-2xl"  data-aos="fade-up">
                    <figure>
                        <img
                            src= {bookingIcon} className='mx-5'/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-xl">
                            Cash On Delivery
                        </h2>
                        <p>From personal packages to business shipments — we deliver on time, every time. </p>
                    </div>
                </div>

                <div className="bg-[#CAEB66] lg:w-96 shadow-lg rounded-3xl p-5 lg:mb-0 md:mb-0 mb-3 hover:shadow-2xl" data-aos="fade-down">
                    <figure>
                        <img
                            src= {bookingIcon} className='mx-5'/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-xl">
                            Delivery Hub
                        </h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>

                <div className="bg-[#CAEB66] lg:w-96 shadow-lg rounded-3xl p-5 lg:mb-0 md:mb-0 mb-3 hover:shadow-2xl" data-aos="fade-left">
                    <figure>
                        <img
                            src= {bookingIcon} className='mx-5'/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-xl">
                           Booking SME & Corporate
                        </h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;