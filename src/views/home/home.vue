<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
    <div>用户名{{ userState.userInfo.userName }}</div>
  </h1>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getUserInfo } from '../../api/user'

const router = useRouter()
const userState = reactive({
  userInfo: {},
})
getUserInfo()
  .then((res) => {
    userState.userInfo = res
  })
  .catch((err) => {
    console.log(err)
    router.push({ path: '/login' })
  })
</script>
<style scoped></style>
