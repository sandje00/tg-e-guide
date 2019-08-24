import Home from '@/components/Home';
import SignUp from '@/components/SignUp';
import SignIn from '@/components/SignIn';

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