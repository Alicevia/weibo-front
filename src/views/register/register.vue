<template>
  <div class="w-full h-full flex justify-center items-center">
    <n-form
      class="w-96"
      ref="formRef"
      label-width="80"
      :rules="formState.rules"
      :model="formState.data"
    >
      <n-form-item label="用户名" path="userName">
        <n-input v-model:value="formState.data.userName"></n-input>
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input v-model:value="formState.data.password"></n-input>
      </n-form-item>
      <n-form-item>
        <n-button class="w-full" @click="formState.onSubmit">注册</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '../../api/user'

const router = useRouter()
const formRef = ref()
const formState = reactive({
  rules: {
    userName: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
      },
    ],
  },
  data: {
    userName: '',
    password: '',
  },
  onSubmit(e) {
    e.preventDefault()
    formRef.value.validate(async (errors) => {
      if (!errors) {
        await registerUser({
          data: formState.data,
        }).then(() => {
          router.push('/login')
        })
      } else {
        console.log(errors)
        $message.error('验证失败')
      }
    })
  },
})
</script>
<style lang="scss" scoped></style>
