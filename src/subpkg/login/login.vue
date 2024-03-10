<script setup lang="ts">
import { ref } from 'vue'
import LogoImg from '../../static/logo.png'
import './login.less'
import Taro from '@tarojs/taro'
import { login as loginApi } from '../../apis/login'

defineOptions({
  name: 'login'
})

const protocolValue = ref(true)

const login = async () => {
  if (!protocolValue.value) {
    return Taro.showToast({
      title: '请先勾选用户协议',
      duration: 1000,
      icon: 'error'
    })
  }

  Taro.showLoading({
    title: '正在登录',
    mask: true
  })
  const data = await Taro.login()
  if (!data.code) {
    return
  }
  const res = await loginApi(data.code)
  console.log(res)
  if (res.status != 200) {
    return Taro.showToast({
      title: '登录失败',
      icon: 'error',
      duration: 1000
    })
  }

  await Taro.setStorage({
    data: res.data.token,
    key: 'token'
  })

  Taro.hideLoading()

  if (res.data.type == 'register') {
    return Taro.navigateTo({
      url: '/subpkg/editUserInfo/editUserInfo'
    })
  } else {
    return Taro.switchTab({
      url: '/pages/my/my'
    })
  }
}
</script>

<template>
  <div class="login">
    <div class="logo">
      <Image :src="LogoImg" class="logo-image" />
    </div>
    <div class="text red-text">登录 XXX 网页版</div>
    <button class="login-button" @click="login">一键登录</button>
    <div class="user-protocol">
      <div class="protocol">
        <!-- <Checkbox
          class="checkbox"
          value="选中"
          :checked="protocolValue"
          :onChange="change"
        ></Checkbox>
        <a href=""> 我已阅读并同意用户协议</a> -->
      </div>
      <a href="">未注册用户将自动注册</a>
    </div>
  </div>
</template>
