import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import setUserToken from '../hooks/setUserToken';
import { Button } from "@/components/ui/button"
import Logo from './Logo';
import { useEffect } from 'react';

const Navbar = () => {
    const { login, register, user } = useKindeAuth();
    const { setUser } = setUserToken();

    useEffect(() => {
        setUser();
    }, [register]);

    return (
        <div className='flex items-center justify-between pt-1'>
            <Logo/>
            <div>
                <Button variant="secondary">Register</Button>
                <Button variant="primary">Login</Button>
            </div>
        </div>
    );
};

export default Navbar;