import Banner from '../Banner/Banner';
import HowItWorks from '../howItWorks/HowItWorks';
import OurServices from '../Services/OurServices';

const Home = () => {
    return (
        <div>
            <div className='my-5'>
                <Banner></Banner>
            </div>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;