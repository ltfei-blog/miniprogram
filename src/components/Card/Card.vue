<script setup lang="ts">
import './card.less'
import Taro from '@tarojs/taro'
// import { BAvatar } from '../../avatar/'
// import { BImage } from '../../image/'
import { formatDate } from '../../utils/dayjs'
// import { useMunuClick } from './card'

defineOptions({
  name: 'BCard'
})

const props = withDefaults(
  defineProps<{
    avatar?: string
    username?: string
    date?: string | Date | number
    title: string
    desc: string
    viewUser?: boolean
    cover?: string
    to: string
    target?: '_self' | '_blank' | '_parent' | '_top'
    router?: boolean
  }>(),
  {
    viewUser: true
  }
)

const handleClick = () => {
  Taro.navigateTo({
    url: props.to
  })
}
</script>

<template>
  <a :href="to" :target="target" @click="handleClick" class="b-card">
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <div class="desc">
        {{ desc }}
      </div>
      <footer class="footer">
        <div class="user" v-if="viewUser">
          <div class="avatar">
            <slot name="avatar">
              <image class="image" :src="avatar" fit="cover" />
            </slot>
          </div>
          <div class="username">User</div>
        </div>
        <div class="date">{{ formatDate(date) }}</div>
        <slot name="footer"></slot>
      </footer>
    </div>
    <div class="cover" v-if="cover">
      <image class="image" :src="cover" mode="aspectFill" />
    </div>
  </a>
</template>
