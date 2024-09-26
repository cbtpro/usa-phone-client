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

import QRCode from 'qrcode'

/**
 * 生成发送短信的二维码
 * @returns SMS短信二维码的base64
 */
export const useSmsTo = () => {
  const createSmsQRcode = (phone: string, message: string) => {
    if (!phone) {
      throw Error('手机号不能为空！')
    }
    if (!message) {
      console.warn('消息内容是空的：', message, '，请检查消息内容！')
    }
    const context = `SMSTO:${phone}:${message}`
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(context)
        .then((url) => {
          resolve(url)
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  }
  return {
    createSmsQRcode,
  }
}
