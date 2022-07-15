import Vue from 'vue'
import VueRouter from 'vue-router'
import homeView from '../views/HomeView.vue'
import editForm from '../components/EditForm.vue'
import form from '../components/form.vue'
import Login from '../components/Login.vue'
 

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: homeView
  },
  {
    path: '/form',
    name: 'form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/form.vue')
  },
  {
    path:'/editform/:id?',
    name:'EditForm',
    component:editForm
  },
  {
    path:'/',
    name:'Login',
    component:Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router