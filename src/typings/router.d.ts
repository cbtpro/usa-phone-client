// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 标题
    title?: string
    // 是否可以跳过授权
    skipAuth: boolean
  }
}