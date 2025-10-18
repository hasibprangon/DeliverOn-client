import Banner from '../Banner/Banner';
import HowItWorks from '../howItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <div className='my-5'>
                <Banner></Banner>
            </div>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;