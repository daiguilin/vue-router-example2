<template>
  <div id="app">
   <!-- <v-home></v-home> -->
   <transition name="fade" mode="out-in">
   <router-view></router-view>
   </transition>
  </div>
</template>
<script>
/*import  home from '@/components/home'*/
export default {
  components:{
    /*"v-home":home*/
  }
}
</script>

<style>
  
</style>
