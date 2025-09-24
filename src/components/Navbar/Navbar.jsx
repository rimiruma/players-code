import coinImg from '../../assets/coin.png'
import navLogo from '../../assets/logo.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-[1100px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-[60px] h-[60px]' src={navLogo} alt="" />
                </a>
            </div>
            <div className="flex items-center">
                <span className='mr-1'>{availableBalance}</span>
                <span className='mr-1'>coin</span>
                <img className='w-[30px] h-[30px]' src={coinImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;