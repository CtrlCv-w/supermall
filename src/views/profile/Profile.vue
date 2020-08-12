<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">CtrlCv-W商城</div>
    </nav-bar>
    <user-info></user-info>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childrencomps/UserInfo'
export default {
  name:'Profile',
  components:{
    NavBar,
    UserInfo
  },
  data() {
    return {
      
    }
  },

}
</script>

<style scoped>
  .profile{
    width: 100vw;
    height: 100vh;
    padding: 44px 0px 50px 0px ;
  }
  .nav-bar{
    background-color: #ff8198;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
</style>