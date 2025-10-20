import React from 'react';
import img from '../../../assets/location-merchant.png'
import img2 from '../../../assets/be-a-merchant-bg.png'

const BeMerchant = () => {
    return (
        <div className='max-w-6xl mx-auto my-5'>
            <div className="hero bg-[#03373d] p-14 rounded-4xl"
             style={{
                    backgroundImage: `url(${img2})`,
                    backgroundSize: '1500px 150px',
                    backgroundPosition: 'top',   
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="hero-content flex-col lg:flex-row-reverse"
                >
                <img
                    src={img}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6 text-[#dadada]">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Deliver On courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn bg-[#CAEB66] rounded-full mr-3 py-4 px-8 hover:text-[#03373d]">Become a Merchant</button>
                    <button className="btn btn-outline text-[#CAEB66] rounded-full  hover:text-black hover:bg-[#CAEB66]">Earn with DeliverOn Courier</button>
                </div>
            </div>
        </div>
        </div >
    );
};

export default BeMerchant;