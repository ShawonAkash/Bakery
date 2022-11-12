import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'

// styles

import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/tailwind.css'

let app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
