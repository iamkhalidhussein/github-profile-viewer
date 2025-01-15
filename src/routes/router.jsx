import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import GithubProfile from '../pages/GithubProfile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/:username',
        element: <GithubProfile/>,
    },
]);

export default router;