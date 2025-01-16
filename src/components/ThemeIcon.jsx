import { DayIcon } from './DayIcon';
import { NightIcon } from './NightIcon';
import useThemeChange from '../hooks/useThemeChange';

export const ThemeIcon = () => {
    const { handleThemeChange, theme } = useThemeChange();
    return (
        <div onClick={handleThemeChange} className='flex cursor-pointer'>
            {theme ? <DayIcon/> : <NightIcon/>}
        </div>
    );
};