import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchPage from './components/SwitchPage.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import Demo from './components/Demo.vue'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', component: Demo },
        { path: 'switch', component: SwitchPage },
        { path: 'button', component: Button },
        { path: 'dialog', component: Dialog },
        { path: 'tabs', component: Tabs }
      ]
    }
  ]
})
export { router }