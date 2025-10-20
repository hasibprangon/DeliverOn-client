import React from 'react';
import { Package, Truck, Headphones } from 'lucide-react';
import img1 from '../../../assets/live-tracking.png'
import img2 from '../../../assets/tiny-deliveryman.png'
import img3 from '../../../assets/safe-delivery.png'


export default function FeaturesSection() {
    const images = [img1, img2, img3]
    const features = [
        {
            id: 1,
            title: 'Live Parcel Tracking',
            description: 'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment\'s journey and get instant status updates for complete peace of mind',
            icon: Package,
        },
        {
            id: 2,
            title: '100% Safe Delivery',
            description: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time',
            icon: Truck,
        },
        {
            id: 3,
            title: '24/7 Call Center Support',
            description: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us',
            icon: Headphones,
        },
    ];

    return (
        <section className="py-8 sm:py-12 px-4 sm:px-6" data-aos="zoom-in-right">
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={feature.id}
                            className="bg-white rounded-lg p-4 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start shadow-xl hover:shadow-md transition-shadow"
                        >
                            <div className='border-b sm:border-b-0 sm:border-r border-dashed pb-4 sm:pb-0 sm:pr-9 flex-shrink-0'>
                                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg flex items-center justify-center">

                                    <img
                                        src={images[index]}
                                        alt={feature.title}
                                        className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 pt-0 sm:pt-2">
                                <h3 className="text-lg sm:text-xl font-bold text-[#03373d] mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                                    {feature.title}
                                    <IconComponent size={25} className="text-gray-400" />
                                </h3>
                                <p className="text-[#606060] leading-relaxed text-xs sm:text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}