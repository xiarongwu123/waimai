<template>
  <div>
    <van-tabbar v-model="active">
  <van-tabbar-item icon="logistics" @click="goTo('/msite')">外卖</van-tabbar-item>
  <van-tabbar-item icon="search" @click="goTo('/search')">搜索</van-tabbar-item>
  <van-tabbar-item icon="balance-list-o"  @click="goTo('/order')">订单</van-tabbar-item>
   <van-tabbar-item icon="manager-o" @click="goTo('/profile')">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>

import Vue from 'vue';
import { Button,Tabbar, TabbarItem  } from 'vant';
    Vue.use(Button);
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
export default {
   data() {
    return {
      active: 0
    }
  },
  components:{

  },
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}

</script>

<style>

</style>