import React from 'react';

const UserLeftSection = ({
    name,
    avatar_url,
    bio,
    login,
    html_url,
    location,
    company,
    email,
    website,
    twitter_username,
    following,
    followers,
    public_repos,
    public_gists,
    created_at,
    total_private_repos
}) => {
    return (
        <div className='bg-white md:w-2/5 h-1/2 dark:bg-black rounded-md mt-10 pb-4 md:px-5 px-4 pt-4'>
        <div className='flex gap-4'>
            <img src={avatar_url} className='w-14 rounded-full'/>
            <div>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <a href={html_url} target='_blank' className='flex items-center gap-1'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt="hakim" className='w-4 h-4'/><h4>{login}</h4>
                </a>
            </div>
        </div>
        <hr className='mt-5'/>
        <p className='pt-3'>{bio}</p>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Location</h4><span>{location && location}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Company</h4><span>{company && company}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Website</h4><span>{website && website}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Email</h4><span>{email && email}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Twitter</h4><span>https://x.com/{twitter_username}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Following</h4><span>{following}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Followers</h4><span>{followers}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Repos</h4><span>{public_repos + (total_private_repos || 0)}</span>
        </div>
        <hr className='my-3'/>
        <div className='flex gap-10'>
            <h4 className='text-gray-400 font-medium'>Gists</h4><span>{public_gists}</span>
        </div>
        <hr className='my-3'/>
        <h5 className='text-gray-600 font-medium'>GitHub member since {created_at?.match(/^\d{4}/)[0]}</h5>
    </div>
    );
};

export default UserLeftSection;