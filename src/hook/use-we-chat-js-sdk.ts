// Copyright 2024 cbtpro
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import wx from 'weixin-js-sdk'
import { isDev } from '@/constants/env'
import { wechatAppId } from '@/constants/wechat'

const useWeChatJsSdk = () => {
  const init = () => {
    wx.config({
      /**
       * 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
       */
      debug: isDev,
      /**
       * 必填，公众号的唯一标识
       */
      appId: wechatAppId,
      /** 必填，生成签名的时间戳 */
      timestamp: Date.now(),
      /** 必填，生成签名的随机串 */
      nonceStr: '', 
      /** 必填，签名 */
      signature: '', 
      /** 必填，需要使用的JS接口列表 */
      jsApiList: [
        'updateAppMessageShareData',
        'updateAppMessageShareData'
      ]
    })
  }
  init()
}

export default useWeChatJsSdk
