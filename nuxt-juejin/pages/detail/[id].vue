<template>
  <div class="p-5">
    <div v-if="pending">loading...</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRoute()
// const { title, content } = await $fetch('/api/detail/' + router.params.id)
const fetchPost = () => $fetch(`/api/detail/${router.params.id}`)
const { data, pending } = useAsyncData(fetchPost)
</script>
