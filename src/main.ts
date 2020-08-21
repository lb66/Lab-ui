import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Haha from './components/Haha.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/xxx', component: Haha }
  ]
})
createApp(App).use(router).mount('#app')

