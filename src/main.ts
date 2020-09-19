import './lib/ui.scss'//添加此行
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'

createApp(App).use(router).mount('#app')

// document.body.addEventListener('touchstart', function () { });

