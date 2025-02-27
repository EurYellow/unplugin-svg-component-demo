<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted } from 'vue'

onMounted(() => {
  autofit.init({
    el: '#app',
    resize: true
  })
})
</script>

<template>
  <router-view />
</template>

<style>
#app {
  background: url('@/assets/images/body_bg.png') center no-repeat;
  background-size: cover;
}
</style>
