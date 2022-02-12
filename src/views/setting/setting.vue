<template>
  <div class="pl-10 pt-10">
    <ModifyUserInfo></ModifyUserInfo>
    <n-divider></n-divider>
    <ModifyPassword></ModifyPassword>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import ModifyUserInfo from './ModifyUserInfo.vue'
import ModifyPassword from './ModifyPassword.vue'
</script>
<style lang="scss" scoped></style>
