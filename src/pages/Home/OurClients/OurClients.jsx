import Marquee from 'react-fast-marquee';
import l1 from '../../../assets/brands/amazon.png'
import l2 from '../../../assets/brands/amazon_vector.png'
import l3 from '../../../assets/brands/casio.png'
import l4 from '../../../assets/brands/moonstar.png'
import l5 from '../../../assets/brands/randstad.png'
import l6 from '../../../assets/brands/start-people 1.png'
import l7 from '../../../assets/brands/start.png'

const OurClients = () => {
    const logos = [l1, l2, l3, l4, l5, l6, l7];
    return (
        <section className="py-16 bg-base-200 border-b border-dashed mb-7">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#03373d] mb-8">
                   We've helped thousands of sales teams
                </h2>

                <Marquee
                    gradient={false}
                    speed={40}
                    pauseOnHover={true}
                    direction="left"
                    className="py-4"
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="mx-12 flex items-center justify-center">
                            <img
                                src={logo}
                                alt={`Client logo ${index}`}
                                className="w-32 md:w-44 h-auto object-contain opacity-80 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default OurClients;