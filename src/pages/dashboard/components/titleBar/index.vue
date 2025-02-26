<script setup lang='ts'>
import { computed } from 'vue'

defineOptions({
  name: 'TitleBar'
})
const title = computed(() => import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <div class="title-bar">
    <h1 class="title">
      {{ title }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  position: relative;
  width: 100%;
  text-align: center;

  background-image: url('@/assets/images/titleBar.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;

  .title {
    color: #b1d9ff;
    letter-spacing: 8px;
  }
}
</style>
