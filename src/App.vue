<template>
  <router-view></router-view>
  <van-tabbar route v-if="isShowTab">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="point-gift-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

let isShowTab = ref(false)
let route = useRoute()
watch(
  route,
  newValue => {
    isShowTab.value = newValue.meta.isShowTab
  },
  {
    immediate: true
  }
)
</script>
