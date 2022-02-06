<template>
  <div>
    <n-button
      :disabled="!fileListLengthRef"
      @click="handleClick"
      style="margin-bottom: 12px"
    >
      上传文件
    </n-button>
    <n-upload
      @change="handleChange"
      :customRequest="customRequest"
      :default-upload="false"
      multiple
      ref="uploadRef"
    >
      <n-button>选择文件</n-button>
    </n-upload>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { uploadFile } from '../../api/utils'

const fileListLengthRef = ref(0)
const uploadRef = ref(null)

function upload(formData, onProgress, onFinish, onError) {
  uploadFile({
    data: formData,
    onUploadProgress: ({ loaded, total }) => {
      onProgress({ percent: Math.ceil((loaded / total) * 100) })
    },
  })
    .then((e) => {
      onFinish(e.data)
    })
    .catch((error) => {
      onError(error)
    })
}
const customRequest = ({
  file,
  data,
  headers,
  withCredentials,
  action,
  method,
  onFinish,
  onError,
  onProgress,
}) => {
  const formData = new FormData()
  console.log(file.file)
  formData.append('file', file.file)
  formData.append('filePath', 'uploadFiles')
  upload(formData, onProgress, onFinish, onError)
}
function handleChange({ fileList }) {
  fileListLengthRef.value = fileList.length
}
function handleClick() {
  uploadRef.value.submit()
}
</script>
<style lang="scss" scoped></style>
