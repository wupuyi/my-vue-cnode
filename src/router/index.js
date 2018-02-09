import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/Content/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
