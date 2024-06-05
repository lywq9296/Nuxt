<template>
  <div>
    <UButton @click="onLogin">登录</UButton>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useUser } from '../store/user'

// 通过 useState 的方式获取登录状态
// const isLogin = useLogin()

// 通过 pinia 的方式获取登录状态
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
