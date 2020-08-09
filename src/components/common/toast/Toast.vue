<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name:'Toast',
    data() {
      return {
        isShow:false,
        message:'',
      }
    },
    methods: {
      showMessage(message,duration=2000){
        this.isShow=true;
        this.message=message;

        setTimeout(() => {
          this.isShow=false;
          this.message="";
        }, duration);
      }
    },
  }
</script>

<style scoped>
  .toast{
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    line-height: 50px;
    padding: 0px 15px;
    background-color: rgba(0,0,0,.6);
    color: #fff;
    z-index: 999;
    border-radius: 25px;
  }
</style>