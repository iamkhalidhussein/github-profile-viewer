import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Button } from "@/components/ui/button"
import Logo from './Logo';
import { ThemeIcon } from './ThemeIcon';
import Profile from './Profile';

const Navbar = () => {
    const { login, register, user } = useKindeAuth();

    return (
        <div className='flex items-center justify-between pt-1'>
            <Logo/>
            <div className='flex items-center gap-3'>
                <ThemeIcon/>
                {
                    !user ?
                    <><Button variant="secondary" className="select-none" onClick={register}>Register</Button>
                    <Button variant="primary" className="select-none" onClick={login}>Login</Button></> : <Profile/>
                }
            </div>
        </div>
    );
};

export default Navbar;