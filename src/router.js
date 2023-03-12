import { createRouter, createWebHistory } from 'vue-router';
import homepage from './pages/homepage.vue';
import portfolio from './pages/portfolio.vue';
import singleproject from './pages/singleproject.vue';
import notfound from './pages/notfound.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: homepage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: portfolio
        },
        {
            path: '/portfolio/:slug',
            name: 'single-project',
            component: singleproject
        },
        {
            path: '/*',
            name: 'not-found',
            component: notfound
        }
    ]
});

export { router }

