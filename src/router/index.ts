import type { RouteRecordRaw } from 'vue-router'
import { closeProgress, startProgress } from '@/utils/progress'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'IndexPage', component: () => import('@/pages/dashboard/index.vue') }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

router.beforeEach(() => {
  startProgress()
})

router.afterEach(() => {
  closeProgress()
})

export default router
