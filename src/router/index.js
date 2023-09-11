import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
// import authService from '../services/auth.service'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      meta: {
        title: 'Dashboard',
        requiresAuth: true,
        SuperAdmin: true
      },
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/CompanyDashboard.vue')
    },
    {
      meta: {
        title: 'CompanyForm',
        requiresAuth: true,
        SuperAdmin: true
      },
      path: '/company',
      name: 'company-form',
      component: () => import('../views/CompanyFormView.vue')
    },
    {
      meta: {
        title: 'Users',
        requiresAuth: true,
        SuperAdmin: true
      },
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      meta: {
        title: 'Stocks',
        requiresAuth: true,
        SuperAdmin: true
      },
      path: '/stocks',
      name: 'stocks',
      component: () => import('../views/CreateStockView.vue')
    },
    {
      meta: {
        title: 'Stock Cycle',
        requiresAuth: true,
        SuperAdmin: true
      },
      path: '/stock-cycle',
      name: 'stock-cycle',
      component: () => import('../views/CreateStockCycleView.vue')
    },
    {
      meta: {
        title: 'Sales',
        requiresAuth: true,
        SuperAdmin: true
      },
      path: '/sales',
      name: 'sales',
      component: () => import('../views/SalesView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    return next();
  }

  if (!localStorage.getItem('token')) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
