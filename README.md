# fake-wechat

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 打包时排除依赖，使用cdn替代

参考文档

- https://cn.vuejs.org/guide/quick-start.html#using-vue-from-cdn
- https://cn.vitejs.dev/config/build-options.html#build-rollupoptions
- https://cn.rollupjs.org/configuration-options/

我这里选择[cdnjs](https://cdnjs.com/libraries/)来搜索对应的依赖和版本，选择包含esm、browser、prod、min关键字的链接，配置到vite.config.ts中，别人的cdn可能不靠谱，如果公司有自己的cdn，则可以将链接下载到本地，然后上传到公司的cdn上，将地址替换成公司的cdn即可。

```sh
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: 'terser',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          'vue': 'vue',
          // 'vue-router': 'vue-router',
        },
        paths: {
          // 'vue': 'https://cdn.jsdelivr.net/npm/vue@3.3.4/+esm',
          'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.prod.min.js',
          // 'vue-router': 'https://cdn.jsdelivr.net/npm/vue-router@4.2.2/+esm',
        }
      },
    },
    terserOptions: {
      //打包后移除console和注释
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})

```

#### 效果

通过这样的操作，光vue这一个运行时依赖，打包后就减少了50.49kB，响应的如果后续有element-ui、axios等依赖，都可以通过这样的方式减少打包大小。
如果公司有多个vue项目，使用了这个相同链接，就能达到加速的目的，也提高的安全性，非常的棒。


## docker相关

### 创建docker容器镜像

```sh
docker build --pull --rm -f "dockerfile" -t fake-wechat-client:0.0.1 "."
```

### 启动容器

```sh
docker run -d --name fake-wechat-client -p 82:80 fake-wechat-client:0.0.1
```

### 停止容器

```sh
# 列出正在运行的容器
docker ps
# 使用container id停止容器 推荐方式 docker stop 容器id
docker stop 021507f525b3
# 使用名称停止容器
docker stop fake-wechat-client
```
### 删除容器

```sh
# 生产和测试不建议直接删除，应该生成新版本的容器
docker rm fake-wechat-client
```