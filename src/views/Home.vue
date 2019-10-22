<template>
  <div class="home">
    <img class="home_img" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>



<style lang="less" scoped>
.home_img {
  width: 200px;
  height: 200px;
}
</style>
