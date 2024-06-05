<template>
  <NuxtErrorBoundary>
    <!-- 默认插槽显示正常内容 -->
    <!-- 触发一个错误 -->
    <ThrowError></ThrowError>
    <!-- error插槽显示错误时内容 -->
    <template #error="{ error }">
      <p class="my-4 text-xl text-gray-500">发生了一些错误 {{ error }}</p>
      <NButton type="success" @click="error.value = null"> 修正错误 </NButton>
    </template>
  </NuxtErrorBoundary>
</template>
