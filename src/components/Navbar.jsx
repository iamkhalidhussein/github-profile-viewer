import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import setUserToken from '../hooks/setUserToken';
import { Button } from "@/components/ui/button"
import Logo from './Logo';
import { useEffect } from 'react';
import { DayIcon } from './DayIcon';
import { NightIcon } from './NightIcon';
import useThemeChange from '../hooks/useThemeChange';

const Navbar = () => {
    const { login, register, user } = useKindeAuth();
    const { setUser } = setUserToken();
    const { handleThemeChange,theme } = useThemeChange();

    useEffect(() => {
        setUser();
    }, [register]);

    return (
        <div className='flex items-center justify-between pt-1'>
            <Logo/>
            <div className='flex items-center gap-3'>
                <div onClick={handleThemeChange} className='flex'>
                    {theme ? <DayIcon/> : <NightIcon/>}
                </div>
                <Button variant="secondary" className="select-none">Register</Button>
                <Button variant="primary" className="select-none">Login</Button>
            </div>
        </div>
    );
};

export default Navbar;