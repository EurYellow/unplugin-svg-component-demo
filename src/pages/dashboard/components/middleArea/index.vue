<script setup lang='ts'>
defineOptions({
  name: 'MiddleArea'
})
</script>

<template>
  <div class="middle-area-wrapper">
    <div class="middle-area1" />
    <div class="middle-area2" />
  </div>
</template>

<style lang="scss" scoped>
.middle-area-wrapper {
  display: flex;
  flex-direction: column;

  .middle-area1 {
    height: 78%;
    border: 1px solid red;
  }
  .middle-area2 {
    flex: 1;
  }
}
</style>
