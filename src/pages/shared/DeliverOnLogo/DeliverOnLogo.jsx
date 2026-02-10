import logo from '../../../assets/logo.png'

const DeliverOnLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-1.5' src={logo} alt="" />
            <p className='md:text-3xl text-[22px] font-extrabold -ml-5'>Deliver On</p>
        </div>
    );
};

export default DeliverOnLogo;