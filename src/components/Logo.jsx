import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='text-3xl font-bold font-sans'>
            <Link to="/">GitSniffer</Link>
        </div>
    );
};

export default Logo;