import Navbar from '../components/Navbar';
import SearchNBanner from '../components/SearchNBanner';

const Main = () => {
    return (
        <div className='h-screen relative md:mx-20 mx-2'>
            <Navbar/>
            <SearchNBanner/>
        </div>
    );
};

export default Main;