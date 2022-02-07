<template>
  <div class="w-96">
    <h4 class="mb-4">基本信息</h4>
    <n-form
      label-placement="left"
      label-width="auto"
      :model="formState.data"
      ref="formRef"
      :rules="formState.rules"
    >
      <n-form-item label="昵称" path="nickName">
        <n-input
          placeholder="请输入昵称"
          v-model:value="formState.data.nickName"
        />
      </n-form-item>
      <n-form-item label="城市" path="city">
        <n-input placeholder="请输入城市" v-model:value="formState.data.city" />
      </n-form-item>
      <n-form-item label="头像" path="picture">
        <n-upload
          v-bind="uploadState"
          v-model:file-list="uploadState.fileList"
        />
      </n-form-item>
      <n-form-item label=" ">
        <n-button @click="formState.submit">保存</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { changeUserInfo, getUserInfo } from '../../api/user'
import { uploadFile } from '../../api/utils'

function useUserInfoForm() {
  const formRef = ref()
  const formState = reactive({
    data: {
      nickName: undefined,
      city: undefined,
      picture: undefined,
    },
    rules: {
      nickName: {
        required: true,
        message: '请输入昵称',
        trigger: ['blur'],
      },
      city: {
        required: true,
        message: '请输入城市',
        trigger: ['blur'],
      },
      picture: {
        required: true,
        message: '请上传头像',
        trigger: ['blur'],
      },
    },
    submit(e) {
      formRef.value.validate(async (errors) => {
        if (!errors) {
          await changeUserInfo({
            data: formState.data,
          })
        }
      })
    },
  })
  const uploadState = reactive({
    fileList: [],
    onRemove() {
      formState.data.picture = undefined
    },
    listType: 'image-card',
    max: 1,
    customRequest({
      file,
      data,
      headers,
      withCredentials,
      action,
      method,
      onFinish,
      onError,
      onProgress,
    }) {
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('filePath', 'uploadFiles')
      uploadFile({
        data: formData,
        onUploadProgress: ({ loaded, total }) => {
          onProgress({ percent: Math.ceil((loaded / total) * 100) })
        },
      })
        .then((res) => {
          file.url = res.url
          formState.data.picture = res.url
          onFinish()
        })
        .catch(onError)
    },
  })
  onMounted(() => {
    getUserInfo()
      .then((res) => {
        formState.data = res
        uploadState.fileList.push({
          id: '123',
          status: 'finished',
          url: res.picture,
          type: 'image/png',
        })
      })
      .catch((err) => {
        console.log(err)
        router.push({ path: '/login' })
      })
  })

  return { formState, formRef, uploadState }
}

const { formState, formRef, uploadState } = useUserInfoForm()
</script>
<style lang="scss" scoped></style>
