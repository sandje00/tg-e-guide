import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import GettingAround from '@/components/GettingAround';
import ViewItem from '@/components/ViewItem';
import Transportation from '@/components/Transportation';
import ToGoList from '@/components/ToGoList';
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
            path: '/viewitem/:idItem',
            name: 'viewitem',
            component: ViewItem
        },
        {
            path: '/transportation',
            name: 'transportation',
            component: Transportation
        },
        {
            path: '/togolist',
            name: 'togolist',
            component: ToGoList
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