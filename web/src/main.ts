import { h } from 'vue'
import { Spin } from 'ant-design-vue'
import { LoadingOutlined } from '@ant-design/icons-vue'

import '@/assets/base.less'
import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')

const indicator = h(LoadingOutlined, {
  style: {
    fontSize: '50px'
  },
  spin: true
})

Spin.setDefaultIndicator({
  indicator: h(indicator, { class: 'anticon anticon-loading anticon-spin ant-spin-dot' })
})
