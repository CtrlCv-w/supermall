<template>
    <div class="icon-selector" :class="{'active': checked}" @click="selectItem">
      <img src="~/assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		  checked: {
		    type: Boolean,
        default: false
      }
    },
    methods: {
      selectItem() {
        this.$emit('selectItem')
      }
    },
	}
</script>

<style scoped>
  .icon-selector {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .icon-selector.active {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #ff6f4b;
    border-color: #ff6f4b;
    text-align: center;
  }
  .icon-selector.active img{
    width: 12px;
    height: 12px;
  }
</style>
