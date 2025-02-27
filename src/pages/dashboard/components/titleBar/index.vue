<script setup lang='ts'>
import { useFullscreen } from '@vueuse/core'
import { format } from 'date-fns'
import { onUnmounted, ref } from 'vue'

defineOptions({
  name: 'TitleBar'
})

const title = import.meta.env.VITE_APP_TITLE
const currentTime = ref <string | null> (null)
const intervalId = ref <NodeJS.Timeout | null> (null)
const { isFullscreen, isSupported, toggle } = useFullscreen()

intervalId.value = setInterval(() => {
  currentTime.value = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
}, 1000)

onUnmounted(() => {
  if (!intervalId.value) {
    return
  }
  clearTimeout(intervalId.value)
})

function toggleFullScreen() {
  if (!isSupported.value) {
    ElMessage.warning({ message: '当前浏览器不支持全屏,请使用其他浏览器尝试。', showClose: true })
  } else {
    toggle()
  }
}
</script>

<template>
  <div class="title-bar">
    <h1 class="title">
      {{ title }}
    </h1>

    <span class="time">
      {{ currentTime }}
      <span class="full-screen">
        <SvgIcon :name="isFullscreen ? 'fullscreen' : 'exit-fullscreen'" class="mouser-pointer" @click="toggleFullScreen" />
      </span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  position: relative;
  width: 100%;
  font-family: 'ds-digitalbold_italic', sans-serif;
  color: #06b4ff;
  text-align: center;

  background-image: url('@/assets/images/titleBar.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;

  .title {
    color: #b1d9ff;
    letter-spacing: 8px;
  }
  .time {
    position: absolute;
    top: 40%;
    right: 2%;
    font-size: 30px;
    line-height: 30px;
    .mouser-pointer {
      margin-left: 16px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
