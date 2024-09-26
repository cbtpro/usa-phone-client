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
</script>

<template>
  <div class="pane-list-item">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <div class="content">
        <slot></slot>
      </div>
      <div class="divider">
        <van-divider />
      </div>
      
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pane-list-item {
  width: 750px;
  height: 100px;
  display: inline-flex;
  // justify-content: center;
  font-size: 24px;
  .left {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
  }
  .center {
    // display: inline-flex;
    // justify-content: center;
    // align-items: center;
    width: 560px;
    margin-left: 24px;
    .content {
      margin-top: 36px;
    }
    .divider {}
  }
  .right {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
  }
}
</style>
