<template>
  <div class="user-list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <font-awesome-icon :icon="item.icon" class="icon" :style="{color:item.iconColor}"/>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'UserList',
    props:{
      listData:Array
    }
  }
</script>

<style scoped>
  .user-list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
    border-radius: 10px;
    margin: 1%;
  }

  .user-list .item {
    display: flex;
    align-items: center;
    height: 44px;
    line-height: 44px;
    position: relative;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }


  .item .icon {
    width: 18px;
    height: 18px;
    margin-top: 10px;
    position: relative;
    top: -1px;
    margin: 0px 1px 0px 10px;
  }

  .item .info {
    padding-left: 5px;
    vertical-align: middle;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>