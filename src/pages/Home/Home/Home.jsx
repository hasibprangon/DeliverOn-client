import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;