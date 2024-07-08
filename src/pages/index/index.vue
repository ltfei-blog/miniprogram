<script setup lang="ts">
import { ref } from 'vue'
import { list as listApi } from '../../apis/articles'
import { Articles } from '../../apis/types'
import './index.less'

defineOptions({
  name: 'index-view'
})

const list = ref<Articles[]>([])

const getArticles = async () => {
  const res = await listApi()
  list.value = res.data

  console.log(list.value)
}
getArticles()
</script>

<template>
  <view class="index">
    <Card
      v-for="i in list"
      :key="i.id"
      :title="i.title"
      :to="`/subpkg/p/p?p=${i.id}`"
      router
      :auto-collapse="470"
      :desc="i.desc"
      :username="i.author_data.username"
      :avatar="i.author_data.avatar"
      :cover="i.cover"
      :date="i.create_time"
    />
  </view>
</template>
