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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showNotify } from 'vant'
import { useNetwork } from '@/network'

const disabled = ref(false)
const username = ref('')
const nickname = ref('');
const password = ref('')

const router = useRouter()
const signUp = (user: ISignUpUser) => {
  const { request } = useNetwork()

  return new Promise<IResponseBody<ISignUpUser>>((resolve, reject) => {
    request<ISignUpUser>({
      url: '/gateway/user/register',
      method: 'POST',
      data: user,
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
const onSubmit = async (values: ISignUpUser) => {
  console.log('submit', values)
  const {
    username,
    nickname,
    password,
  } = values;
  try {
    const user = await signUp(values);
    console.log(user);
    showNotify({
      type: 'success',
      message: '注册成功！',
    })
    router.push({
      path: '/sign-in',
    });
  } catch (error) {
    console.error(error);
    const message = (error as any).message;
    showNotify({
      type: 'danger',
      message,
    })
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <van-image
        width="100"
        height="100"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        class="avatar"
      />
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            :rules="[{ required: true, message: '请填写用户名' }]"
            name="username"
            label="用户名"
            placeholder="用户名"
            autocomplete="username"
          />
          <van-field
            v-model="nickname"
            :rules="[{ required: true, message: '请填写昵称' }]"
            name="nickname"
            label="昵称"
            placeholder="昵称"
            autocomplete="nickname"
          />
          <van-field
            v-model="password"
            :rules="[{ required: true, message: '请填写密码' }]"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            autocomplete="current-password"
          />
        </van-cell-group>
        <div class="footer">
          <van-button
            :disabled="disabled"
            block
            type="success"
            native-type="submit"
          >
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 750px;
  .header {
    width: 750px;
    .avatar {
      margin-top: 200px;
      left: 275px;
    }
  }
  .form {
    width: 100%;
    margin-top: 60px;
    .avatar {
      margin: 40px auto;
    }
  }
  .footer {
    margin: 40px auto 0px;
    width: 600px;
  }
}
</style>
