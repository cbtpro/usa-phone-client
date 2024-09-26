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

import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosError } from 'axios'
import CryptoJS from 'crypto-js'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HttpStatus from '@/constants/HttpStatus'

const secretKey = import.meta.env.VITE_APP_SECRET_KEY
export const useInterceptors = () => {
  const setCookieInterceptor = (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    return config
  }

  const requestErrorHandle = (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }

  const setAuthInfoInterceptor = (config: InternalAxiosRequestConfig) => {
    const authStore = useAuthStore()
    const { authInfo } = authStore
    const { access_token } = authInfo
    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`
    }
    return config
  }

  const responseInterceptor = (response: AxiosResponse<IResponseBody<any>>) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  }

  const router = useRouter()
  const responseErrorHandler = (error: AxiosError) => {
    const { response } = error
    const { status, data } = response || {}
    if (status === HttpStatus.UNAUTHORIZED) {
      router.push({
        path: '/sign-in'
      })
    }
    return Promise.reject(new Error((data as any).message))
  }
  /**
   * 加密数据函数
   *
   * 本函数使用AES加密算法对传入的数据进行加密。它首先将数据转换为JSON字符串，
   * 然后使用预设的密钥进行加密。加密完成后，将加密的字符串返回。
   *
   * @param data 待加密的字符串数据
   * @returns 返回加密后的字符串
   */
  const encryptData = (data: string) => {
    // 使用CryptoJS的AES加密方法加密数据，并将加密结果转换为字符串
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString()
    return ciphertext
  }
  /**
   * 解密数据。
   *
   * 该函数使用AES加密算法解密经过加密的字符串，以恢复原始数据。
   * 它依赖于CryptoJS库来执行加密解密操作。
   *
   * @param ciphertext 加密的字符串，使用AES算法加密。
   * @returns 解密后的数据，以JSON对象的形式返回。
   */
  const decryptData = (ciphertext: string) => {
    // 使用AES算法和预设的密钥解密密文。
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey)
    // 将解密后的字节序列解析为UTF-8编码的字符串，并进一步解析为JSON对象。
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
  const setEncryptDataInterceptor = (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    const { data } = config
    if (data) {
      config.data = {
        ciphertext: encryptData(data)
      }
    }
    return config
  }
  const setDecryptDataInterceptor = (response: AxiosResponse<IResponseBody<any>>) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { data,  } = response
    if (data && data.ciphertext && typeof data.ciphertext === 'string') {
      response.data = decryptData(data.ciphertext)
    }
    return response
  }
  const cryptoErrorHandle = (error: AxiosError) => {
    return Promise.reject(error);
  }
  return {
    setCookieInterceptor,
    requestErrorHandle,
    setAuthInfoInterceptor,
    responseInterceptor,
    responseErrorHandler,
    setEncryptDataInterceptor,
    setDecryptDataInterceptor,
    cryptoErrorHandle,
  }
}
