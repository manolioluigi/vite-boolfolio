import { createRouter, createWebHistory } from 'vue-router';
import homepage from './pages/homepage.vue';
import portfolio from './pages/portfolio.vue';
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
        }
    ]
});

export { router }

