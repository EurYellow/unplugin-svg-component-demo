<script setup lang='ts'>
import leftArea from './components/leftArea/index.vue'
import middleArea from './components/middleArea/index.vue'
import rightArea from './components/rightArea/index.vue'
import titleBar from './components/titleBar/index.vue'

defineOptions({
  name: 'IndexPage'
})
</script>

<template>
  <div class="wrapper wh-full">
    <div class="container wh-full">
      <titleBar style="grid-area: top;" />
      <leftArea />
      <middleArea />
      <rightArea />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  .container {
    display: grid;
    grid-template-areas:
      'top top top'
      'a b c';
    grid-template-rows: 8% 1fr;
    grid-template-columns: 1fr 45% 1fr;
    grid-gap: 15px;
    justify-content: center;
    padding: 8px;
    padding-top: 0px;
    color: #fff;
  }
}
</style>
