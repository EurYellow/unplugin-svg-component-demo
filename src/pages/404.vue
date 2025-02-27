<script setup lang='ts'>
defineOptions({
  name: 'NotFound'
})
</script>

<template>
  <div class="wh-full flex-center">
    <el-result sub-title="Sorry, request error" class="flex-center">
      <template #icon>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        />
      </template>

      <template #title>
        <span class="m-4">4042</span>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
</style>
