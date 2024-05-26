<template>
  <h1>Counter.vue</h1>
  <div class="p-4">
    Count: {{ count }} <br />
    Count2:{{ count2 }}
    <div class="mt-2">
      <UButton
        @click="
          () => {
            count++
            count2++
          }
        "
        >count++,count2++</UButton
      >&nbsp;
      <UButton
        @click="
          () => {
            count--
            count2--
          }
        "
        >count++,count2--</UButton
      >
    </div>
  </div>
</template>
<script setup lang="ts">
const count = useCounter()
const count2 = ref(1)
</script>
