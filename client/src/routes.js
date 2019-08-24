import Home from '@/components/Home';
import SignUp from '@/components/SignUp';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/signin',
        component: SignIn
    }
];

export default routes;