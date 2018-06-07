import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import vueContent from '@/components/vueContents/vueContent'
import webpackContent from '@/components/webpackContents/webpackContent'
import html5 from '@/components/html5/html5'
import es6 from '@/components/es6/es6'

Vue.use(Router)

let pageTpl = r => require.ensure([], () => {
  r(require('@/common/pageTpl'))
}, 'CMChunk')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: pageTpl,
      children: [{
        path: '',
        component: index
      }, {
        path: '/vueContent',
        name: 'vueContent',
        component: vueContent
      }, {
        path: '/es6',
        name: 'es6',
        component: es6
      }, {
        path: '/html5',
        name: 'html5',
        component: html5
      }, {
        path: '/webpackContent',
        name: 'webpackContent',
        component: webpackContent
      }]
    }
  ]
})
