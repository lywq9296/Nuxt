<template>
  <div class="p-4">
    Counter: {{ counter }}<br />
    CounterRef: {{ counterRef }}
  </div>
  <div class="mt-2">
    <UButton @click="counter++">counter++</UButton>&nbsp;
    <UButton @click="counter--">counter--</UButton>
  </div>
  <Counter />
  <Counter />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

// const counter = useState('counter', () => Math.round(Math.random() * 1000))
const counterRef = ref(Math.round(Math.random() * 1000))

const store = useCounter()
const { value: counter } = storeToRefs(store)
</script>
