import Banner from '../Banner/Banner';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import HowItWorks from '../howItWorks/HowItWorks';
import OurClients from '../OurClients/OurClients';
import OurServices from '../Services/OurServices';

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
        </div>
    );
};

export default Home;