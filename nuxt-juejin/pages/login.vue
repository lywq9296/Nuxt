<template>
  <div>
    <UButton @click="onLogin">登录</UButton>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const isLogin = useLogin()
const route = useRoute()
const router = useRouter()
const onLogin = () => {
  isLogin.value = true
  const callback = route.query.callback?.toString() || ''
  router.push(callback)
}
</script>
