import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'athlete'
    },
    {
      path: '/athlete/',
      name: 'athlete',
      component: () => import('../modules/Athlete/AthleteView.vue')
    }
  ]
})

export default router
