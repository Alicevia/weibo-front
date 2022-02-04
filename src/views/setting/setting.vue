<template>
  <div>
    <n-upload :customRequest="customRequest">
      <n-button>上传文件</n-button>
    </n-upload>
  </div>
</template>

<script setup>
import { uploadFile } from '../../api/utils'

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

  formData.append('file', file.file)
  formData.append('filePath', 'uploadFiles')
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
</script>
<style lang="scss" scoped></style>
