import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewArticle from '../views/NewArticle.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles/new',
    name: 'NewArticle',
    component: NewArticle
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
