import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const Search = () => {
    const { user } = useKindeAuth();
    const [username, setUsername] = useState('');

    const fetchGithubProfile = async () => {
        const authorizedUser = user;
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}`, {
                headers: {
                    ...(authorizedUser && {
                        Authorization: `Bearer ${import.meta.env.VITE_OAuthAccessToken}`
                    }),
                }
            })
            const data = await response.json();
            console.log('data', data);
            if(data.status === '401') {
                toast.error('unauthorized access', {
                    position: 'bottom-right',
                    autoClose: '2000'
                });
            };
        } catch (error) {
            toast.error(error.message || error, {
                position: 'bottom-right',
                autoClose: '2000'
            });
        }
    }

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <ToastContainer/>
            <Input type="text" placeholder="@username" onChange={(e) => setUsername(e.target.value)} className="border-black dark:border-white"/>
            <Button type="submit" onClick={fetchGithubProfile}>Search</Button>
        </div>
    );
};

export default Search;