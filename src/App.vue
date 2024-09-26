<script setup lang="ts">
import { reactive } from 'vue'
import type { ConfigProviderThemeVars } from 'vant'
import useHtmlHeadMeta from '@/utils/html-head-meta'
import { onMounted } from 'vue'

const themeVars = reactive<ConfigProviderThemeVars>({
  // rateIconFullColor: '#07c160',
  // sliderBarHeight: '4px',
  // sliderButtonWidth: '20px',
  // sliderButtonHeight: '20px',
  // sliderActiveBackground: '#07c160',
  // buttonPrimaryBackground: '#07c160',
  // buttonPrimaryBorderColor: '#07c160'
  navBarBackground: '#EDEDEC',
  tabbarBackground: '#EDEDEC',
  tabbarItemActiveBackground: '#EDEDEC'
})

const htmlHeadMeta = useHtmlHeadMeta()

onMounted(() => {
  htmlHeadMeta.setMeta([
    {
      name: 'theme-color',
      media: '(prefers-color-scheme: light)',
      content: '#EDEDEC'
    },
    {
      name: 'theme-color',
      media: '(prefers-color-scheme: dark)',
      content: '#ecece1'
    }
  ])
})
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </van-config-provider>
</template>

<style scoped>
.container {
  width: 750px;
  height: 100vh;
  background-color: #ececed;

  font-size: 24px;
}
</style>
