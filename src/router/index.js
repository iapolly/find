import Vue from 'vue'
import Router from 'vue-router'

import Menu from '../components/Menu'
import Rules from '../components/Rules'
import Table from '../components/Table'
import Notebook from '../components/Notebook'
import Settings from '../components/Settings'
import Credits from '../components/Credits'
import Cupboard from '../components/Cupboard'
import Shirt from '../components/Shirt'
Vue.use(Router)
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

export default new Router({
  routes: [
    {path: '/menu', component: Menu},
    {path: '/rules', component: Rules},
    {path: '/settings', component: Settings},
    {path: '/first', component: Table},
    {path: '/second', component: Notebook},
    {path: '/credits', component: Credits},
    {path: '/cupboard', component: Cupboard},
    {path: '/shirt', component: Shirt}
  ]
})
