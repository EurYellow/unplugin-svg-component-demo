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
        <div class="mt-4 w-full flex items-center justify-center gap-x-4 p-2 text-4xl">
          <div class="i-vscode-icons:file-type-light-pnpm" />
          <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
        </div>
        <span class="color-blue">404</span>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
</style>
