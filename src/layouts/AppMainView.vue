<template>
  <a-layout class="w-full grow scroll-bar">
    <AppSideViewVue v-if="showMenu"></AppSideViewVue>
    <a-layout-content class="overflow-auto">
      <router-view class="h-full"></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
  import AppSideViewVue from './AppSideView.vue'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const showMenu = computed(() => {
    return route.meta?.showMenu
  })
</script>
