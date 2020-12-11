import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Explore from '@/views/Explore.vue';
import MyCodes from '@/views/MyCodes.vue';
import { authGuard } from '@/auth/authGuard';
import CreateCode from '@/views/CreateCode.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'my-memes',
        component: MyCodes,
        beforeEnter: authGuard,
    },
    {
        path: '/new-meme',
        name: 'new-meme',
        component: CreateCode,
        beforeEnter: authGuard
    },
    {
        path: '/explore',
        name: 'explore',
        component: Explore,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
