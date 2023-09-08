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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CompanyDashboard.vue')
    },
    {
      meta: {
        title: 'CompanyForm',
        requiresAuth: true,
        SuperAdmin: true
      },
      path: '/create-stock',
      name: 'create-stock',
      component: () => import('../views/CompanyForm.vue')
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
