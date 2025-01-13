import React, { useEffect } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import setUserToken from '../libs/setUserToken';

const Main = () => {
    const { login, register, user } = useKindeAuth();
    const { setUser } = setUserToken();

    useEffect(() => {
        setUser();
    }, [register]);

    console.log(user)
    return (
        <div>
            main Page
            <button onClick={register}>signup</button>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Main;