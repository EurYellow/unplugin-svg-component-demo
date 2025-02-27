import { createApp } from 'vue'
import SvgIcon from '~virtual/svg-component'
import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss'
import 'normalize.css'

const app = createApp(App)

app.component(SvgIcon.name!, SvgIcon)
app.use(router)
app.mount('#app')
