// Copyright 2023 Peter Chen
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type { RouteLocationNormalized } from 'vue-router'
import { useHtmlHeadTitle } from '@/utils/html-head-title'
import { useAuthStore } from '@/stores/auth'

export const validateAuthFn = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const { meta } = to
  const { skipAuth } = meta
  if (skipAuth) {
    return true
  }
  // TODO 判断是否登陆
  const authStore = useAuthStore()
  const { authInfo } = authStore
  if (authInfo.access_token) {
    return true
  }
  return {
    path: '/sign-in',
    // 保存我们所在的位置，以便以后再来
    query: { redirect: to.fullPath },
  }
}
export const sendToAnalyticsFn = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // TODO 发送分析日志到后台的方法，建议实现时采用批量方式来提交
  console.log(to, from)
}

export const updateHtmlTitleFn = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const htmlHeadTitle = useHtmlHeadTitle()
  const { meta } = to
  const { title } = meta
  htmlHeadTitle.setTitle({
    title: title as string,
  })
}
