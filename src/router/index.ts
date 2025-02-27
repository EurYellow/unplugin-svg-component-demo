import type { RouteRecordRaw } from 'vue-router'
import { closeProgress, startProgress } from '@/utils/progress'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('@/pages/dashboard/index.vue')
  },
  {
    path: '/test',
    name: 'TestPage',
    component: () => import('@/pages/test/index.vue')
  },
  { path: '/:pathMatch(.*)*', component: () => import('@/pages/404.vue') }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  startProgress()
})

router.afterEach(() => {
  closeProgress()
})

export default router
