<template>
  <div>
    <UButton @click="onLogin">登录</UButton>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useUser } from '../store/user'

// const isLogin = useLogin()
const store = useUser()
const { isLogin } = storeToRefs(store)
const route = useRoute()
const router = useRouter()
const onLogin = () => {
  isLogin.value = true
  const callback = route.query.callback?.toString() || ''
  router.push(callback)
}
</script>
