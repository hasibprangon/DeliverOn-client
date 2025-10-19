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
        <section className="py-12 px-4" data-aos="zoom-in-right">
            <div className="max-w-4xl mx-auto space-y-6">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={feature.id}
                            className="bg-white rounded-lg p-8 flex gap-8 items-start shadow-xl hover:shadow-md transition-shadow"
                        >
                            <div className='border-r border-dashed pr-9'>
                                <div className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">

                                    <img
                                        src={images[index]}
                                        alt={feature.title}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 pt-2">
                                <h3 className="text-xl font-bold text-[#03373d] mb-3 flex items-center gap-3">
                                    {feature.title}
                                    <IconComponent size={25} className="text-gray-400" />
                                </h3>
                                <p className="text-[#606060] leading-relaxed text-sm">
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