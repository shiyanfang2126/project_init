<template>
  <a-config-provider :locale="locale">
    <a-layout class="h-full">
      <a-layout class="items-center flex flex-col bg-green-400">
        <AppMainView></AppMainView>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
  import AppMainView from '@/layouts/AppMainView.vue'
  import locale from 'ant-design-vue/es/locale/zh_CN'
  import dayjs from 'dayjs'
  import zh from 'dayjs/locale/zh-cn'

  dayjs.locale(zh)
</script>
