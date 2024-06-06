export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log('vue error handler')
  }

  nuxtApp.hook('vue:error', () => {
    console.log('vue:error')
  })

  nuxtApp.hook('app:error', () => {
    console.log('app:error')
  })
})
