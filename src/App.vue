<template>
  <n-config-provider :theme="null" :locale="zhCN" :date-locale="dateZhCN">
    <n-dialog-provider>
      <n-message-provider>
        <MyApp></MyApp>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
<script setup>
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'

import MyApp from './MyApp.vue'
</script>
<style></style>
