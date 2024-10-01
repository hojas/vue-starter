import Content from '@/pages/Content/index.vue'
import Home from '@/pages/Home/index.vue'
import NotFound from '@/pages/NotFound/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/Content', component: Content },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
