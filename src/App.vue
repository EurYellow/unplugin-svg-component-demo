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
  <RouterView />
</template>

<style>

</style>
