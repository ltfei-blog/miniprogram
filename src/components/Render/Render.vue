<script setup lang="ts">
import './render.less'
defineOptions({
  name: 'Render'
})

defineProps<{
  text: string
}>()
</script>

<template>
  <div class="render" v-html="text"></div>
</template>

<style lang="less" scoped></style>
