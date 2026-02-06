import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/layanan',
            name: 'services',
            component: () => import('../views/ServicesView.vue')
        },
        {
            path: '/portofolio',
            name: 'portfolio',
            component: () => import('../views/PortfolioView.vue')
        },
        {
            path: '/tentang',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
