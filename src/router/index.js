import Vue from 'vue'
import Router from 'vue-router'

var Menu = require('./components/Manu.vue')
var Rules = require('./components/Rules.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/menu', component: Menu},
    {path: 'rules', component: Rules}
  ]
})
