import { createApp, h } from 'vue'
import 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue'
import { useClient, defaultPlugins } from 'villus'
import { createPinia } from 'pinia'

import { gqlGlobalErrorHandlerPlugin } from './plugins/gql-global-error-handler'
import { authPlugin } from './plugins/gql-auth'

import './css/index.css'
import App from './App.vue'
import { router } from './router/index'

const app = createApp({
  setup() {
    useClient({
      url: import.meta.env.VITE_APP_API_URL,
      use: [gqlGlobalErrorHandlerPlugin, authPlugin, ...defaultPlugins()],
      cachePolicy: 'network-only',
    })
  },
  render: () => h(App),
})

app.use(router)
app.use(Antd)
app.use(createPinia())
app.mount('#app')
