import { createApp } from 'vue'
import SvgIcon from '~virtual/svg-component'
import App from './App.vue'

import 'normalize.css'
import '@/assets/styles/index.scss'

const app = createApp(App)
app.component(SvgIcon.name!, SvgIcon)

app.mount('#app')
