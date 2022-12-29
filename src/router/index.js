import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {
    userAuthStore
} from '@/store/user';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/SignUp.vue')
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../views/SignIn.vue')
    },
    {
        path: '/product/detail/:id',
        name: 'productDetail',
        component: () => import('../views/ProductDetail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to) => {
    const publicPages = ['/signup', '/signin'];
    const authRequired = !publicPages.includes(to.path);
    const auth = userAuthStore();
    if (authRequired && !auth.token) {
        auth.returnUrl = to.fullPath;
        return '/signin';
    }

})

export default router