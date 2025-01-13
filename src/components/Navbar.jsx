import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import setUserToken from '../hooks/setUserToken';
import { Button } from "@/components/ui/button"
import Logo from './Logo';
import { useEffect } from 'react';
import { ThemeIcon } from './ThemeIcon';

const Navbar = () => {
    const { login, register, user } = useKindeAuth();
    const { setUser } = setUserToken();

    useEffect(() => {
        setUser();
    }, [register]);

    return (
        <div className='flex items-center justify-between pt-1'>
            <Logo/>
            <div className='flex items-center gap-3'>
                <ThemeIcon/>
                <Button variant="secondary" className="select-none" onClick={register}>Register</Button>
                <Button variant="primary" className="select-none" onClick={login}>Login</Button>
            </div>
        </div>
    );
};

export default Navbar;