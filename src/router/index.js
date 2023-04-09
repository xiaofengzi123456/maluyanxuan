import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/login',
      name:"login",
      component:()=>import("@/views/login/index.vue"),
      meta:{
        isShowTab:false
      }
    },
    {
      path:'/',
      name:"home",
      component:()=>import("@/views/home/index.vue"),
      meta:{
        isShowTab:true
      }
    },
    {
      path:'/category',
      name:"category",
      component:()=>import("@/views/category/index.vue"),
      meta:{
        isShowTab:true
      }
    },
    {
      path:'/cart',
      name:"cart",
      component:()=>import("@/views/cart/index.vue"),
      meta:{
        isShowTab:true
      }
    },
    {
      path:'/my',
      name:"my",
      component:()=>import("@/views/my/index.vue"),
      meta:{
        isShowTab:true
      }
    },
    {
      path:'/:pathMatch(.*)',
      redirect:'/'
    }
  ]
})




export default router
