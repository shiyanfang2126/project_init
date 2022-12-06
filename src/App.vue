<template>
  <!-- TODO: 切换antd中英文 -->
  <!-- <div>
    <a-radio-group v-model:value="locale">
      <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
    </a-radio-group>
  </div> -->
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <a-layout class="h-full">
      <a-layout class="items-center flex flex-col bg-green-400">
        <AppMainView></AppMainView>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import AppMainView from '@/layouts/AppMainView.vue'
  import dayjs from 'dayjs'
  import 'dayjs/locale/zh-cn'
  import enUS from 'ant-design-vue/es/locale/en_US'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'

  const locale = ref(enUS.locale)
  watch(locale, (val) => {
    dayjs.locale(val)
  })
</script>
