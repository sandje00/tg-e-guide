import Home from '@/components/Home';
import Register from '@/components/Register';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: Register
    }
];

export default routes;

/* import Vue from 'vue';
import router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';

Vue.use(router);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
}); */