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

export interface HtmlHeadMeta {
  [x: string]: string;
  name: string;
  // media?: string;
  content: string;
}

export const useHtmlHeadMeta = () => {
  // const allMetas: HtmlHeadMeta[] = []
  HTMLMetaElement

  const findMetaEl = (meta: HtmlHeadMeta) => {
    const metaKeys = Object.keys(meta)
    .map(key => {
      return {
        key,
        value: meta[key]
      }
    })
    const selector = 
      metaKeys.reduce((prev, next) => {
        if (next) {
          const { key, value } = next
          if (key === 'content') {
            return prev
          }
          return prev + `[${key}="${value}"]`
        }
        return prev
      }, 'meta')
    const [ first ] = document.head.querySelectorAll(selector)
    return first
  }
  const createMetaEl = (meta: HtmlHeadMeta) => {
    if (!meta) {
      const info = 'Pass in the meta attribute'
      console.warn(info)
      return
    }
    let metaEl = findMetaEl(meta)

    if (!metaEl) {
      metaEl = document.createElement('meta')
      Object.keys(meta).forEach(key => {
        if (key) {
          const value = meta[key]
          metaEl.setAttribute(key, value)
        }
      })
      console.log('新增meta属性', JSON.stringify(meta, null, 2))
      document.head.appendChild(metaEl)
    } else {
      Object.keys(meta).forEach(key => {
        if (key) {
          const value = meta[key]
          metaEl.setAttribute(key, value)
        }
      })
      console.log('修改meta属性', JSON.stringify(meta, null, 2))
    }
  }
  /**
   * 设置meta
   */
  const setMeta = (arg: HtmlHeadMeta | HtmlHeadMeta[]) => {
    if (Array.isArray(arg)) {
      arg.forEach(item => createMetaEl(item))
      return
    } else {
      createMetaEl(arg)
    }
  }
  /**
   * 移除meta
   */
  const removeMeta = () => {}

  return {
    setMeta,
    removeMeta,
  }
}

export default useHtmlHeadMeta
