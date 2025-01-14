import React from 'react';

const UserLeftSection = () => {
    return (
        <div className='bg-white w-2/5 rounded-md mt-10 px-5 pt-4'>
        <div className='flex gap-4'>
            <img src="https://avatars.githubusercontent.com/u/629429?v=4" alt="hakim" className='w-14 rounded-full'/>
            <div>
                <h3 className='text-xl font-semibold'>Hakim El Hattab</h3>
                <div className='flex items-center gap-1'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt="hakim" className='w-4 h-4'/><h4>hakimel</h4>
                </div>
            </div>
        </div>
        <hr className='mt-5'/>
        <p className='pt-3'>Making Slides.com • kodemo.com • reveal.js • Creator of questionable value at https://hakim.se</p>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Location</h4><span>Sweden</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Company</h4><span>slides.com</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Website</h4><span>https://hakim.se</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Email</h4><span>https://hakim.se</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Twitter</h4><span>https://hakim.se</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Following</h4><span>https://hakim.se</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Followers</h4><span>https://hakim.se</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Repos</h4><span>https://hakim.se</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Gists</h4><span>https://hakim.se</span>
        </div>
        <hr className='my-3'/>
        <h5 className='text-gray-600 font-medium'>GitHub member since 2011</h5>
    </div>
    );
};

export default UserLeftSection;