import { definePlugin } from 'villus'

import { appState } from '@/store/app'

export const gqlGlobalErrorHandlerPlugin = definePlugin(({ afterQuery }) => {
  afterQuery(({ error }) => {
    if (!error?.response) {
      return
    }

    const { errors } = error.response.body
    const { message, extensions } = errors[0]

    const { errorFields } = extensions

    if (errorFields?.statusCode === 401) {
      localStorage.removeItem(import.meta.env.VITE_APP_JWT_NAME)
      // TODO: 登录处理
    } else {
      appState().insertErrorMessage(message)
    }
  })
})
