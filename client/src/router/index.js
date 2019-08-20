import Vue from 'vue';
import router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
});