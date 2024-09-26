<!--
 Copyright 2023 Peter Chen
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useRouterTab from '@/stores/router-tab'

const routerTabStore = useRouterTab()

const router = useRouter()
const  goToPages = (path: string) => {
  router.push({
    path,
  })
}

const route = useRoute()

const init = () => {
  const { path } = route
  switch (path) {
    default:
    case '/':
      routerTabStore.setActive(0)
      break;
    case '/friend-list':
      routerTabStore.setActive(1)
      break;
    case '/discover':
      routerTabStore.setActive(2)
      break;
    case '/my':
      routerTabStore.setActive(3)
      break;
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <van-tabbar v-model="routerTabStore.active">
    <van-tabbar-item @click="goToPages('/')" icon="home-o">微信</van-tabbar-item>
    <van-tabbar-item @click="goToPages('/friend-list')" icon="friends-o">通讯录</van-tabbar-item>
    <van-tabbar-item @click="goToPages('/discover')" icon="search">发现</van-tabbar-item>
    <van-tabbar-item @click="goToPages('/my')" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less" scoped>

</style>
