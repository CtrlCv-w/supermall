<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script>
export default {
  name:'NavBar',
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    vertical-align: middle;
    height: 44px;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    /*<!--border-bottom:1px solid rgba(100, 101, 100, .5);-->*/
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>