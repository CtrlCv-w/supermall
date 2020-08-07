<template>
  <div class="back-top" @click="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name:'BackTop',
    methods: {
      backTop(){
        this.$emit('backClick')
      }
    },
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 50px;
    z-index: 999;
  }
  .back-top img{
    width: 50px;
    height: 50px;
  }
</style>