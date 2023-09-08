import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from "./store";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')

export default app;
