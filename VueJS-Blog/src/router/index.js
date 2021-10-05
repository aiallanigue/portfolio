import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PostDetail from '@/components/post_detail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Articles/',
      name: 'post_detail',
      component: PostDetail
    }
  ]
})
export default router
