import Vue from 'vue'
import Router from 'vue-router'

import Menu from '../components/Menu'
import Rules from '../components/Rules'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/menu', component: Menu},
    {path: '/rules', component: Rules}
  ]
})
