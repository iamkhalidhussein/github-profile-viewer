import { useState } from 'react';
import { toast } from 'react-toastify';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useNavigate } from 'react-router-dom';

const useFetchGithubUser = (username) => {
    const { user } = useKindeAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const inputUsername = username.replace(/\s+/g, '').toLowerCase();
    console.log(inputUsername); 

    const fetchGithubProfile = async () => {
        const authorizedUser = await user;
        console.log('authorized user', user)
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${inputUsername}`, {
                headers: {
                    ...(authorizedUser && {
                        Authorization: `Bearer ${import.meta.env.VITE_OAuthAccessToken}`
                    }),
                }
            })
            
            const data = await response.json();
            console.log(data);
            if(data.id) {
                sessionStorage.removeItem('gitsniffer-user');
                sessionStorage.setItem('gitsniffer-user', JSON.stringify(data));
                navigate(`/${data.login}`, { state: { user: data } });
            }
            if(data.status === '401') {
                toast.error('unauthorized access', {
                    position: 'bottom-right',
                    autoClose: '2000'
                });
            } else if(data.status === '404') {
                toast.error('user could not found', {
                    position: 'bottom-right',
                    autoClose: '2000'
                });
            }
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