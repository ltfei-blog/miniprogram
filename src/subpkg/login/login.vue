<script setup lang="ts">
import { ref } from 'vue'
import LogoImg from '../../static/logo.png'
import './login.less'

defineOptions({
  name: 'login'
})

const val1 = ref(false)
</script>

<template>
  <div class="login">
    <div class="logo">
      <Image :src="LogoImg" class="logo-image" />
    </div>
    <div class="text red-text">登录 XXX 网页版</div>
    <button class="login-button">一键登录</button>
    <div class="user-protocol">
      <div class="protocol">
        <Checkbox class="checkbox" value="选中" checked></Checkbox>
        <a href=""> 我已阅读并同意用户协议</a>
      </div>
      <a href="">未注册用户将自动注册</a>
    </div>
  </div>
</template>
