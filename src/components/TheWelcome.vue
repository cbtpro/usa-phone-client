<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="container">
    <div class="label">计数器 {{ counterStore.count }}</div>
    <button @click="counterStore.increment">增加</button>
    <button @click="counterStore.reduce">减少</button>
  </div>
</template>

<style lang="less" scoped>
.container {
  color: red;
  .label {
    width: 375px;
  }
}
</style>
