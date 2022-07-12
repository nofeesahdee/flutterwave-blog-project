import { createRouter, createWebHistory } from 'vue-router'
import BlogDetails from '../views/BlogDetails.vue'
import BlogHomepage from '../views/BlogHomepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"BlogHomepage",
      component: BlogHomepage
    },
    {
      path:"/details/:id",
      name:"BlogDetails",
      component: BlogDetails,
      props: true
    }
  ]
})

export default router
