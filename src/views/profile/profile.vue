<template>
  <div>profile</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getBlogList } from '../../api/blog'

const fetchBlogList = async () => {
  const res = await getBlogList({
    params: {
      userName: 123,
      page: 0,
    },
  })
  console.log(res)
}
onMounted(fetchBlogList)
</script>
<style lang="scss" scoped></style>
