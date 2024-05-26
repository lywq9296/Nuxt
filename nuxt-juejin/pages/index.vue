<template>
  <div class="flex items-center flex-col gap-2">
    <h1>Index Page</h1>
    <div>
      <UButton>Button</UButton>
    </div>
    <NuxtLink to="/detail/1">detail 1</NuxtLink>
  </div>
  <div v-if="pending">loading...</div>
  <div v-else-if="error" class="text-red-300">{{ error.message }}</div>
  <div v-else>
    <div v-for="post in posts" :key="post.id">
      <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{ post.title }}</NuxtLink>
      <p class="text-slate-500">发布于：{{ post.date }}</p>
    </div>
  </div>
  <div>
    <UButton @click="next">下一页</UButton>
    <UButton @click="prev">上一页</UButton>
  </div>
</template>

<script setup lang="ts">
// const posts = await $fetch('/api/posts')
const page = ref(1)
const { data: posts, pending, error, refresh } = useFetch(() => `/api/posts?page=${page.value}&size=1`, { lazy: true })
const prev = () => {
  page.value--
  refresh()
}
const next = () => {
  page.value++
  refresh()
}
</script>

<style scoped></style>
