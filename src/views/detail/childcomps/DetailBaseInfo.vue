  <!-- Error in render: "TypeError: Cannot read property '0' of undefined" 
      组件创建完成网络请求数据还未获得,数据下标无法获取
  -->
<template>
  <div class="baseInfo" v-if="Object.keys(baseInfo).length !== 0">
    <div class="info-price">
      <span class="n-price">{{baseInfo.newPrice}}</span>
      <span class="o-price">{{baseInfo.oldPrice}}</span>
      <span :class="{discount:baseInfo.discount}">{{baseInfo.discount}}</span>
    </div>
    <div class="info-all">
      <div class="info-title">{{baseInfo.title}}</div>
      <div class="info-other">
        <span>{{baseInfo.columns[0]}}</span>
        <span>{{baseInfo.columns[1]}}</span>
        <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
      </div>
      <div class="info-service">
        <!-- v-for遍历数字从index从1开始 -->
        <span class="info-service-item" v-for="index in baseInfo.services.length-1" :key="index">
          <img :src="baseInfo.services[index-1].icon" />
          <span>{{baseInfo.services[index-1].name}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.baseInfo {
  color: rgb(146, 146, 146);
  border-bottom: 5px solid transparent;
}
.info-price {
  padding: 10px 20px;
  margin-bottom: 5px;
  background-image: linear-gradient(to right, rgb(241, 47, 47), #f06464);
  border-radius: 0px 0px 5px 5px;
}
.info-price span font{
  display: none !important;
  height: 0px !important;
  width: 0px !important;
}

.info-price .n-price {
  font-size: 24px;
  color: #fff;
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 6px;
  text-decoration: line-through;
}

.info-price .discount {
  margin-left: 15px;
  font-size: 12px;
  line-height: 18px;
  padding: 2px 5px;
  color: #fff;
  background-color: #ff9f05;
  border-radius: 8px;

  /*让元素上浮一些*/
  position: relative;
  top: -6px;
}
.info-all{
  background-color: #fff;
  margin: 0px 1%;
  border-radius: 10px;
}
.info-all::before {
  content: " ";
  display: table;
}
.info-title {
  /* 设置文字显示两行后隐藏-webkit-box */
  display: -webkit-box;
  color: #222;
  font-size: 18px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px 15px;
  margin-top: 15px;
}
.info-other {
  margin-top: 10px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
  justify-content: space-between;
  padding: 0px 15px;
  color: gray;
}

.info-service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0px 15px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
  left: -3px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>