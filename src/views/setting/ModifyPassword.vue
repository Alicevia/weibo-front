<template>
  <div class="w-96">
    <h4 class="mb-4">修改密码</h4>
    <n-form
      label-placement="left"
      label-width="auto"
      :model="formState.data"
      ref="formRef"
    >
      <n-form-item label="当前密码" path="password">
        <n-input
          placeholder="请输入当前密码"
          v-model:value="formState.data.password"
        />
      </n-form-item>
      <n-form-item label="新密码" path="newPassword">
        <n-input
          placeholder="请输入新密码"
          v-model:value="formState.data.newPassword"
        />
      </n-form-item>
      <n-form-item label="确认密码" path="repeatPassword">
        <n-input
          placeholder="请再次输入新密码"
          v-model:value="formState.data.repeatPassword"
        />
      </n-form-item>
      <n-form-item label=" ">
        <n-button @click="formState.submit">提交</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { changePassword } from '../../api/user'

function useUserInfoForm() {
  const formRef = ref()
  const formState = reactive({
    data: {
      password: undefined,
      repeatPassword: undefined,
    },
    rules: {
      password: {
        required: true,
        message: '请输入原密码',
        trigger: ['blur'],
      },
      newPassword: {
        required: true,
        message: '请输入新密码',
        trigger: ['blur'],
      },
      repeatPassword: {
        required: true,
        message: '请再次输入密码',
        trigger: ['blur'],
      },
    },
    submit(e) {
      formRef.value.validate(async (errors) => {
        if (!errors) {
          await changePassword({
            data: formState.data,
          })
        }
      })
    },
  })

  return { formState, formRef }
}

const { formState, formRef } = useUserInfoForm()
</script>
<style lang="scss" scoped></style>
