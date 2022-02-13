<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
    <div>用户名{{ userState.userInfo.userName }}</div>
    <n-button @click="handleLogout" v-if="userState.userInfo.userName"
      >退出</n-button
    >
  </h1>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getUserInfo, logout } from '../../api/user'

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

const handleLogout = async () => {
  const res = await logout()
  router.push('/login')
}
</script>
<style scoped></style>
