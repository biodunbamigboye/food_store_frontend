import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.use(VueSweetalert2);

app.mount('#app')

export default app;
