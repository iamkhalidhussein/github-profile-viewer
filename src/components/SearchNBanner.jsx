import React from 'react';
import Search from './Search';
import BannerTitle from './BannerTitle';

const SearchNBanner = () => {
    return (
        <div className='absolute md:bottom-1/4 bottom-2/4 flex items-center'>
            <div>
                <BannerTitle/>
                <Search/>
            </div>
            <div>
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjg5cTZ1MjR5d296anQ1d2wzbnV3Z21ueXFlNGM1OHducGpkeGxlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Sh1iCtJZEdx4PFYy4q/giphy.webp" alt="copilot" className='select-none' draggable={false}/>
            </div>
        </div>
    );
};

export default SearchNBanner;