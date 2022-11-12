import { createRouter, createWebHistory } from 'vue-router'

// layouts

import Admin from '@/layouts/Admin.vue'
import Auth from '@/layouts/Auth.vue'

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard.vue'
import Settings from '@/views/admin/Settings.vue'
import Tables from '@/views/admin/Tables.vue'

// views for Auth layout

import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

const routes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Admin,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard,
      },
      {
        path: '/admin/settings',
        component: Settings,
      },
      {
        path: '/admin/tables',
        component: Tables,
      },
    ],
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/register',
        component: Register,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
