import React from 'react';
import UserLeftSection from '../components/UserLeftSection';

const GithubProfile = () => {
    return (
        <div className='bg-gray-200 h-screen'>
            <div className='flex mx-20 gap-20'>
            <UserLeftSection/>
            <div className='bg-white mt-10'>
                <div className='flex'>
                    <h5>Public Repositories</h5><span>30</span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GithubProfile;