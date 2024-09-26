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

<template>
  <div class="container">
    <van-nav-bar
      :safe-area-inset-top="true"
      :placeholder="true"
      :fixed="true"
      :border="false"
    >
      <template #left>
        <div class="left">
          <van-icon name="todo-list-o" color="#000" size="20" />
        </div>
      </template>
      <template #title>
        <div v-click.double="dblClickHandle">微信</div>
      </template>
      <template #right>
        <van-icon name="friends-o" color="#000" size="20" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'dbl-click-callback', value: number): void
}>()
const dblClickHandle = () => {
  emit('dbl-click-callback', Date.now())
}
</script>

<style lang="less" scoped>
.container {
  width: 750px;
  height: 44px;
  // font-family: "阿里巴巴普惠体 2.0 35 Thin";
  .left {
    .arrow-left {
      width: 64px;
      height: 64px;
    }
  }
  .center {
    font-size: 17px;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    line-height: 24px;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
