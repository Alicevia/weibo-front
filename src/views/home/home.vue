<template>
  <div>
    <div></div>
    <div>
      <n-input-group>
        <n-input v-model:value="weiboState.content" :style="{ width: '50%' }" />
        <n-button type="primary" ghost @click="weiboState.onSubmit">
          发送
        </n-button>
      </n-input-group>
      <n-upload
        :onFinish="weiboState.onFinish"
        :onChange="weiboState.onChange"
        v-model:fileList="weiboState.fileList"
        action="/api/utils/upload"
      >
        <n-upload-dragger>
          <n-text style="font-size: 16px"
            >点击或者拖动文件到该区域来上传</n-text
          >
          <n-p depth="3" style="margin: 8px 0 0 0">
            请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
          </n-p>
        </n-upload-dragger>
      </n-upload>
    </div>
    <n-button @click="handleLogout" v-if="userState.userInfo.userName"
      >退出</n-button
    >
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getUserInfo, logout } from '../../api/user'
import { createWeiBo } from '../../api/blog'

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
  await logout()
  router.push('/login')
}
function useWeiboState() {
  const weiboState = reactive({
    content: undefined,
    fileList: [],
    onChange({ fileList }) {
      weiboState.fileList = fileList
    },
    onFinish({ event, file }) {
      const { response } = event.target
      const res = JSON.parse(response)
      file.url = res.data.url
    },
    image: computed(() => {
      const file = weiboState.fileList[0]
      console.log(file)

      if (file && file.status == 'finished') {
        return file.url
      }
      return undefined
    }),
    async onSubmit() {
      console.log(weiboState.fileList)
      const res = await createWeiBo({
        data: { content: weiboState.content, image: weiboState.image },
      })
    },
  })
  return { weiboState }
}
const { weiboState } = useWeiboState()
</script>
<style scoped></style>
