import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'
import './assets/Blog.scss'

createApp(App).use(store).use(router).mount('#app')
