import {
  createSSRApp,
} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'uno.css'
import './style/index.scss'

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  return {
    app,
  }
}
