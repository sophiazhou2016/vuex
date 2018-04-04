import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import vueContent from '@/components/vueContents/vueContent'
import webpackContent from '@/components/webpackContents/webpackContent'

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
        path: '/webpackContent',
        name: 'webpackContent',
        component: webpackContent
      }]
    }
  ]
})
