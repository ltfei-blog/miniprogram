<script setup lang="ts">
import './my.less'
import { userStore } from '../../stores/user'
import { Image, Navigator } from '@tarojs/components'
import scanCodeImage from '../../static/scan-code_1.png'
import userImage from '../../static/user.png'
import Taro from '@tarojs/taro'

defineOptions({
  name: 'my'
})

const { user } = userStore()

/**
 * todo: 扫码逻辑
 */
const scan = async () => {
  await Taro.scanCode({})
}
</script>
<!-- todo: 页面底部按钮  -->
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
        <div class="scan" @click.stop="scan">
          <Image class="image" :src="scanCodeImage" />
        </div>
      </div>
      <!-- 未登录 -->
      <div class="user not-login" v-else>
        <Navigator url="/subpkg/login/login" class="userinfo">
          <div class="avatar">
            <Image class="image" :src="userImage" />
          </div>
          <div class="text">
            <div class="username">请登录</div>
            <div class="desc">简介...</div>
          </div>
        </Navigator>
        <div class="scan" @click.stop="scan">
          <Image class="image" :src="scanCodeImage" />
        </div>
      </div>
    </div>
    <div class="background-bottom">
      <div class="data">
        <div class="item">
          <div class="value">28</div>
          <div class="name">作品</div>
        </div>
        <div class="item">
          <div class="value">28</div>
          <div class="name">获赞</div>
        </div>
        <div class="item">
          <div class="value">28</div>
          <div class="name">粉丝</div>
        </div>
      </div>
    </div>
  </div>
</template>
