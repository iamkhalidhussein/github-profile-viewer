import React from 'react';
import Search from './Search';
import BannerTitle from './BannerTitle';

const SearchNBanner = () => {
    return (
        <div className='absolute bottom-1/2'>
            <BannerTitle/>
            <Search/>
        </div>
    );
};

export default SearchNBanner;