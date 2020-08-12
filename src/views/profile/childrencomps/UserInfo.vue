<template>
  <div id="user-info">
    <slot name="user-icon">
      <font-awesome-icon icon="user-circle" class="privateImage left" />
    </slot>
    <div class="login-info left">
      <div class="info">
        <span>
          <font-awesome-icon icon="address-card" />
        </span>
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
      </div>
      <div class="phone">
        <span>
          <font-awesome-icon icon="mobile-alt" class="icon-mobile" />
        </span>
        <slot name="user-phone">暂无绑定手机号</slot>
      </div>
    </div>
    <font-awesome-icon icon="chevron-right" class="icon-arrow right" />
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
#user-info {
  background-color: #ff8198;
  padding: 15px;
  overflow: hidden;
  border-radius: 5px;
  margin: 0.5% 1%;
}
#user-info .privateImage {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}

.left {
  float: left;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}
#user-info .login-info .info {
  display: flex;
  font-size: 17px;
}
#user-info .login-info .info > div {
  margin-left: 5px;
}
#user-info .login-info .phone {
  position: relative;
  display: flex;
  font-size: 14px;
  margin-top: 6px;
  margin-left: 2px;
}
.login-info .phone .icon-mobile{
  margin-right: 8px;
  font-size: 18px;
}
#user-info .icon-arrow {
  width: 11px;
  height: 22px;
  margin-top: 18px;
  color: #f0eeee;
}
</style>