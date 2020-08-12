<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">CtrlCv-W商城</div>
    </nav-bar>
    <user-info></user-info>
    <div class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>张
        </div>
        <div class="account-info">活动卡券</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">9999</span>分
        </div>
        <div class="account-info">当前积分</div>
      </div>
    </div>
    <user-list :listData="orderList"></user-list>
    <user-list :listData="serviceList"></user-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./childrencomps/UserInfo";
import UserList from './childrencomps/UserList'
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    UserList
  },
  data() {
    return {
      orderList: [
        {icon: 'envelope', iconColor: '#f15f21', info: '我的消息'},
        {icon: 'file-alt', iconColor: '#fc7b53', info: '积分商城'},
        {icon: 'crown', iconColor: '#ffc636', info: '会员卡'},
        ],
      serviceList: [
        {icon: 'shopping-cart', iconColor: '#ff8198', info: '我的购物车'},
        {icon: 'download', iconColor: '#ff8175', info: '下载购物APP'},
        ]
      }
    }
}
</script>

<style scoped>
#profile {
  width: 100vw;
  height: 100vh;
  padding: 44px 0px 50px 0px;
}
.nav-bar {
  background-color: #ff8198;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
.account {
    display: flex;
    border-radius: 10px;
    margin: 0.5% 1%;
    overflow: hidden;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }
</style>