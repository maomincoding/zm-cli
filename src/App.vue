<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app'
};
</script>
<style lang="less">
 #app{
   text-align: center;
   margin-top:35vh; 
  & a{
    color: #333;
  }
 }
</style>
