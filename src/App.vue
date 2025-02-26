<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted } from 'vue'

onMounted(() => {
  autofit.init({
    el: 'body',
    resize: true,
    dh: 1080,
    dw: 1920
  })
})
</script>

<template>
  <div />
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  background: url('@/assets/images/body_bg.png') center no-repeat;
  background-size: cover;
}
</style>
