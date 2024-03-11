<script setup lang="ts">
import './my.less'
import { userStore } from '../../stores/user'
import { Image } from '@tarojs/components'

defineOptions({
  name: 'my'
})

const { user } = userStore()
</script>
<!-- todo: 获取用户信息，页面底部按钮  -->
<template>
  <div class="my">
    <div class="background-top">
      <!-- 已登录 -->
      <div class="user" v-if="user.isLogin">
        <div class="userinfo">
          <div class="avatar">
            <Image class="image" :src="user.userinfo.avatar" />
          </div>
          <div class="text">
            <div class="username">{{ user.userinfo.username }}</div>
            <div class="desc">简介...</div>
          </div>
        </div>
        <div class="scan"></div>
      </div>
      <!-- 未登录 -->
      <div class="user" v-else>
        <div class="userinfo">
          <div class="avatar">
            <!-- <Image class="image" :src="" /> -->
          </div>
          <div class="text">
            <div class="username">请登录</div>
            <div class="desc">简介...</div>
          </div>
        </div>
        <div class="scan"></div>
      </div>
    </div>
    <div class="background-bottom"></div>
  </div>
</template>
