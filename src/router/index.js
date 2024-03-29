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
// router.beforeEach((to, from, next) => {

//   /** Navigate to next if middleware is not applied */
//   if (!to.meta.middleware) {
//       return next()
//   }

//   const middleware = to.meta.middleware;
//   const context = {
//     to,
//     from,
//     next,
//   //   store  | You can also pass store as an argument
//   }

//   return middleware[0]({
//       ...context,
//       next:middlewarePipeline(context, middleware,1)
//   })
// })
export default router