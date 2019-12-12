<template>
  <div class="index">
     <h1 id="home">hello，zm-cli.</h1>
     <img src="../../assetc/zm.png" alt="">
     <div>
        <router-link to='./about'>about</router-link>
     </div>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style scoped lang='less'>
img{
  width: 5%;
  margin: 20px 0;
}
</style>