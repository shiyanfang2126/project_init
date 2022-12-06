import { definePlugin } from 'villus'

export const authPlugin = definePlugin(({ opContext }) => {
  const jwt = localStorage.getItem(import.meta.env.VITE_APP_JWT_NAME || '')
  opContext.headers.Authorization = `Bearer ${jwt}`
})
