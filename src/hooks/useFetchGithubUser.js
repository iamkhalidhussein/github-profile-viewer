import { useState } from 'react';
import { toast } from 'react-toastify';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const useFetchGithubUser = (username) => {
    const { user } = useKindeAuth();
    const [loading, setLoading] = useState(false);

    const fetchGithubProfile = async () => {
        const authorizedUser = await user;
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`, {
                headers: {
                    ...(authorizedUser && {
                        Authorization: `Bearer ${import.meta.env.VITE_OAuthAccessToken}`
                    }),
                }
            })
            const data = await response.json();
            if(data.status === '401') {
                toast.error('unauthorized access', {
                    position: 'bottom-right',
                    autoClose: '2000'
                });
            };
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error.message || error, {
                position: 'bottom-right',
                autoClose: '2000'
            });
        }
    };
    return { fetchGithubProfile, loading };
};

export default useFetchGithubUser;