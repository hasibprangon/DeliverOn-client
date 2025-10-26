import Banner from '../Banner/Banner';
import BeMerchant from '../BeMerchant/BeMerchant';
import FAQSection from '../Faq/FAQSection';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import HowItWorks from '../howItWorks/HowItWorks';
import OurClients from '../OurClients/OurClients';
import OurServices from '../Services/OurServices';
import TestimonialSection from '../TestimonialSection/TestimonialSection';

const Home = () => {
    return (
        <div>
            <div className='my-5'>
                <Banner></Banner>
            </div>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <OurClients></OurClients>
            <FeaturesSection></FeaturesSection>
            <BeMerchant/>
            <TestimonialSection></TestimonialSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;