<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted } from 'vue'
import index from './pages/dashboard/index.vue'

onMounted(() => {
  autofit.init({
    el: 'body',
    resize: true

  })
})
</script>

<template>
  <index />
</template>

<style>

</style>
