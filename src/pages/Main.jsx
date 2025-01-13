import Navbar from '../components/Navbar';
import SearchNBanner from '../components/SearchNBanner';

const Main = () => {
    return (
        <div className='h-screen relative mx-20'>
            <Navbar/>
            <SearchNBanner/>
        </div>
    );
};

export default Main;