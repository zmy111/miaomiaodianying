<template>
 <!-- <div>
    <van-cell-group class="loginForm">
      <van-field
        v-model="uname"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="pwd" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div class="login_btn">
      <input type="submit" value="登录" @click.prevent="login" />
    </div>
    <div class="login_link">
      <a href="#" @click.prevent="toRegister">立即注册</a>
      <a href="#" @click.prevent="toFindPassword">找回密码</a>
    </div>
    </div> -->
    <div id="content">
      <div class="login_body">
        <div>
          <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
        </div>
        <div>
          <input class="login_text" type="password" placeholder="请输入您的密码" />
        </div>
        <div class="login_btn">
            <input type="submit" value="登录">
        </div>
        <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
     
      </div>
    </div>
</template>

<script>
export default {
    name:'Login'
  }
</script>


<style scoped>
#content .login_body {
  width: 100%;
}
.login_body {
  margin-top: 60px;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_btn {
  height: 50px;
  margin: 10px;
}
.login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_link {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 14px;
  color: #e54847;
}
.loginForm {
  margin-top: 50px;
}
</style>
