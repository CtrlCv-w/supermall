<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
}
</script>

<style>
  #tab-bar{
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgb(235, 232, 232);
    z-index: 999;
  }
</style>