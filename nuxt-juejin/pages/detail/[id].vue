<template>
  <div class="p-5">
    <div v-if="pending">loading...</div>
    <div v-else-if="error">{{ (error as NuxtError).data.message }}</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
      <div class="py-2">
        <UTextarea v-model="comment" placeholder="输入评论" />
        <UButton @click="onSubmit">发送</UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app'
import { storeToRefs } from 'pinia'
import { useUser } from '~/store/user'

const route = useRoute()
const router = useRouter()

// 通过 pinia 的方式获取登录状态
const store = useUser()
const { isLogin } = storeToRefs(store)

// const { title, content } = await $fetch('/api/detail/' + router.params.id)
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`)
const { data, pending, error } = useAsyncData(fetchPost)
const comment = useState('comment', () => '')

// 通过 useState 的方式获取登录状态
// const isLogin = useLogin()

const toast = useToast()
const onSubmit = () => {
  if (isLogin.value) {
    toast.add({ title: '已提交评论' })
    comment.value = ''
  } else {
    router.push('/login?callback=' + route.path)
  }
}
</script>
