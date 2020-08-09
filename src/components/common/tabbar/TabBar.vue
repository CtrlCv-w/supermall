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
    background-color: rgba(230, 228, 228, 0.97);
    z-index: 9;
  }
</style>