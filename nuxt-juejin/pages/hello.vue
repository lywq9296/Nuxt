<template>{{ message }}</template>

<script setup lang="ts">
const message = await $fetch('/api/hello')
</script>
