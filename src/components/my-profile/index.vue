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
import { ActiveColor } from '@/constants/color'
</script>

<template>
  <pane-list>
    <div class="my-profile">
      <div class="avatar">
        <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" class="avatar" />
      </div>
      <div class="info">
        <div class="nickname">大反派</div>
        <div class="username">用户名：test</div>
        <div class="status">+ 状态 废话少说，放码过来</div>
      </div>
      <div class="more">
        <van-icon name="qr" size="24" />
        <van-icon name="arrow" size="24" />
      </div>
    </div>
  </pane-list>
  <pane-list>
    <div class="service">
      <pane-list-item>
        <template #left>
          <van-icon name="cash-o" size="24" />
        </template>
        <template #default>
          服务
        </template>

        <template #right>
          服务
        </template>
      </pane-list-item>
    </div>
  </pane-list>
  <pane-list>
    <div class="service">
      <pane-list-item>
        <template #left>
          <van-icon name="cash-o" size="24" />
        </template>
        收藏
      </pane-list-item>
      <pane-list-item>
        <template #left>
          <van-icon name="photo-o" size="24" />
        </template>
        朋友圈
      </pane-list-item>
      <pane-list-item>
        <template #left>
          <van-icon name="idcard" size="24" :color="ActiveColor" />
        </template>
        卡包
      </pane-list-item>
      <pane-list-item>
        <template #left>
          <van-icon name="cash-o" size="24" />
        </template>
        表情
      </pane-list-item>
    </div>
  </pane-list>
  <pane-list>
    <div class="service">
      <pane-list-item>
        <template #left>
          <van-icon name="setting-o" size="24" />
        </template>
        设置
      </pane-list-item>
    </div>
  </pane-list>
</template>

<style lang="less" scoped>
.my-profile {
  position: relative;
  width: 750px;
  height: 300px;
  .avatar {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 180px;
    height: 180px;
    overflow: hidden;
  }
  .info {
    position: absolute;
    left: 220px;
    top: 24px;
    width: 400px;
    height: 200px;
    .nickname {
      margin-top: 24px;
    }
    .username {
      margin-top: 8px;
    }
    .status {
      margin-top: 8px;
    }
  }
  .more {
    position: relative;
    top: 24px;
    left: 640px;
    width: 96px;
    padding-top: 60px;
  }
}
</style>
