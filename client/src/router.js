import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import GettingAround from '@/components/GettingAround';
import Transportation from '@/components/Transportation';
import SignUp from '@/components/SignUp';
import SignIn from '@/components/SignIn';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/gettingaround',
            name: 'gettingaround',
            component: GettingAround
        },
        {
            path: '/transportation',
            name: 'transportation',
            component: Transportation
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        }
    ]
  });