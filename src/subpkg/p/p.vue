<script setup lang="ts">
import './p.less'
import Taro from '@tarojs/taro'
import { details as detailsApi } from '../../apis/articles'
import { ref } from 'vue'
import { Articles } from '../../apis/types'

defineOptions({
  name: 'p-view'
})

const { params } = Taro.useRouter()

console.log(params)
const id = params.p

const articles = ref<Articles>()

const details = async () => {
  if (!id) {
    return
  }
  const res = await detailsApi(id)
  articles.value = res.data
}
details()
</script>

<template>
  <div class="p">
    <div class="title">
      <h1>{{ articles?.title }}</h1>
    </div>
    <div class="data">
      <div class="author">作者：{{ articles?.author_data.username }}</div>
    </div>
    <div class="content">
      <Render :text="articles?.content"></Render>
    </div>
  </div>
</template>
