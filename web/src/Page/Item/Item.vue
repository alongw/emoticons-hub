<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { message } from 'ant-design-vue'

import { getImgList as getImgListApi } from '@/apis/index'

defineOptions({
  name: 'ItemPage'
})

const route = useRoute()

const screenWidth = window.innerWidth

const hash = route.params.hash.toString()

const baseUrl = import.meta.env.VITE_HTTP_BASE_URL

const imgList = ref<string[]>([])

onMounted(async () => {
  const { data: result } = await getImgListApi({
    hash
  })
  if (result.status !== 200) {
    return message.error(result.msg)
  }
  imgList.value = result.data.fileList
})
</script>

<template>
  <div v-if="!imgList[0]" class="spin">
    <a-spin size="large" />
  </div>
  <a-flex wrap="wrap" gap="small" justify="center" align="center">
    <a-image-preview-group>
      <a-image
        v-for="item in imgList"
        :key="item"
        :width="screenWidth < 630 ? screenWidth / 3 - 20 : 200"
        :src="`${baseUrl}/file/${hash}/${item}`"
        :placeholder="true"
        loading="lazy"
      />
    </a-image-preview-group>
  </a-flex>
</template>

<style scoped lang="less">
.spin {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
