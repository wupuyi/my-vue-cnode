import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/Content/ArticleList'
import ArticleDetail from '@/components/Content/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
