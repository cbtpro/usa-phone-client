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
import { computed, ref } from 'vue'

const friendList = ref([
  {
    type: 'menu',
    text: '新的朋友'
  },
  {
    type: 'menu',
    text: '仅聊天的朋友'
  },
  {
    type: 'menu',
    text: '群聊'
  },
  {
    type: 'menu',
    text: '标签'
  },
  {
    type: 'menu',
    text: '公众号'
  },
  {
    type: 'menu',
    text: '企业微信联系人'
  },
  {
    type: 'Index',
    text: '我的企业',
    children: [
      {
        type: 'menu',
        text: '深圳市税务局移动办税'
      }
    ]
  },
  {
    type: 'IndexText',
    text: 'A',
    children: [
      {
        type: 'menu',
        text: '阿娟'
      },
      {
        type: 'menu',
        text: '阿军'
      },
      {
        type: 'menu',
        text: 'AI'
      }
    ]
  },
  {
    type: 'IndexText',
    text: 'B',
    children: [
      {
        type: 'menu',
        text: '白浅'
      },
      {
        type: 'menu',
        text: '大B哥'
      },
      {
        type: 'menu',
        text: '大哥'
      }
    ]
  },
  {
    type: 'IndexText',
    text: 'C',
    children: [
      {
        type: 'menu',
        text: '陈小二'
      },
      {
        type: 'menu',
        text: '陈小三'
      },
      {
        type: 'menu',
        text: '陈小四'
      }
    ]
  },
  {
    type: 'IndexText',
    text: 'D',
    children: [
      {
        type: 'menu',
        text: '丁丁'
      },
      {
        type: 'menu',
        text: '丁丁'
      },
      {
        type: 'menu',
        text: '丁丁'
      }
    ]
  },
  {
    type: 'IndexText',
    text: 'Z',
    children: [
      {
        type: 'menu',
        text: '张霞'
      }
    ]
  }
])
const indexList = computed(() => {
  return friendList.value.filter((item) => item.type === 'IndexText').map((item) => item.text)
})
</script>

<template>
  <van-nav-bar :fixed="true" :border="false" title="通讯录">
    <template #right>
      <van-icon name="friends-o" color="#000" size="20" />
    </template>
  </van-nav-bar>
  <body-container>
    <van-index-bar :index-list="indexList">
      <template v-for="(item) in friendList" :key="item.text">
        <van-cell v-if="item.type === 'menu'" :title="item.text" />
        <van-index-anchor v-else-if="item.type === 'IndexText'" :index="item.text" />
        <template v-if="item.children">
          <van-cell v-for="(child) in item.children" :title="child.text" :key="child.text" />
        </template>
      </template>
    </van-index-bar>
  </body-container>
  <body-footer />
</template>

<style lang="less" scoped></style>
