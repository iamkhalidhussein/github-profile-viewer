import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import GithubProfile from '../pages/GithubProfile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/user',
        element: <GithubProfile/>
    }
]);

export default router;