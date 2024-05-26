import { useState } from 'nuxt/app'

export const useCounter = () => useState('count', () => 1)
