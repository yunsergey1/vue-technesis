import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import ContactPage from '@/pages/ContactPage'
import AboutPage from '@/pages/AboutPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    }
  ]
})
