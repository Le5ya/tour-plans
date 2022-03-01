  import Vue from 'vue'
  import VueRouter from 'vue-router'

  import MainPage from '../views/MainPage'
  import SinglePage from '../views/SinglePage'

  Vue.use(VueRouter)

  const routes = [{
      path: '/',
      component: MainPage,
    },
    {
      name: 'single',
      path: '/single-page',
      component: SinglePage
    },


  ]



  const router = new VueRouter({
    mode: 'history',
    routes

  })

  export default router