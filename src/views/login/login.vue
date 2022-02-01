<template>
  <div>
    <n-form ref="formRef" label-width="80" :model="formState">
      <n-form-item label="用户名">
        <n-input v-model:value="formState.username"></n-input>
      </n-form-item>
      <n-form-item label="密码">
        <n-input v-model:value="formState.username"></n-input>
      </n-form-item>
      <n-form-item>
        <n-button>登录</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref()
const formState = reactive({
  username: '',
  password: '',
})
</script>
<style lang="scss" scoped></style>
