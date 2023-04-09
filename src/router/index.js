import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/login',
      name:"login",
      component:()=>import("@/views/login/index.vue")
    },
    {
      path:'/',
      name:"home",
      component:()=>import("@/views/home/index.vue")
    },
    {
      path:'/category',
      name:"category",
      component:()=>import("@/views/category/index.vue")
    },
    {
      path:'/cart',
      name:"cart",
      component:()=>import("@/views/cart/index.vue")
    },
    {
      path:'/my',
      name:"my",
      component:()=>import("@/views/my/index.vue")
    },
    {
      path:'/:pathMatch(.*)',
      redirect:'/'
    }
  ]
})




export default router
