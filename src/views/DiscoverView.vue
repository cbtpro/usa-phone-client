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

<script setup lang="ts"></script>

<template>
  <van-nav-bar :fixed="true" :border="false" title="发现" />
  <body-container>
    <van-cell-group>
      <van-cell title="朋友圈">
        <template #icon>
          <van-icon name="smile-o" size="24" />
        </template>
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
      <van-cell title="直播" value="LPL夏季赛 JDG对RNG" is-link>
        <template #icon>
          <van-icon name="tv-o" size="24" />
        </template>
      </van-cell>
      <van-cell title="扫一扫" is-link>
        <template #icon>
          <van-icon name="scan" size="24" />
        </template>
      </van-cell>
      <van-cell title="小程序" is-link>
        <template #icon>
          <van-icon name="apps-o" size="24" />
        </template>
      </van-cell>
    </van-cell-group>
  </body-container>
  <body-footer />
</template>

<style lang="less" scoped></style>
