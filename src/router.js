import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('./components/HelloWorld')
        },
        {
            path: '/Drum',
            name: 'Drum',
            component: () => import('./components/Drum')
        }
        ]
});
