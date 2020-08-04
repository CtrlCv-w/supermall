<template>
  <div class="tab-bar-items" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItems",
  props: {
    path: String,
    activeColor: {
      style: String,
      default: "#FF5777",
    },
  },
  computed: {
    // 匹配点击后活跃插槽
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 动态改变点击颜色
    activeStyle() {
      return this.isActive ? { color : this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      return this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-items {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-items img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 4px;
  margin-bottom: 3px;
}
</style>