import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchPage from './components/SwitchPage.vue'
import ButtonPage from './components/ButtonPage.vue'
import InputPage from './components/InputPage.vue'
import DialogPage from './components/DialogPage.vue'
import GridPage from './components/GridPage.vue'
import ToastPage from './components/ToastPage.vue'
import CollapsePage from './components/CollapsePage.vue'
import TabsPage from './components/TabsPage.vue'
import PoptipPage from './components/PoptipPage.vue'
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {                             //children嵌套路由
      path: '/doc', component: Doc, children: [
        { path: '', redirect: '/doc/introduce' },//修改
        { path: "introduce", component: h(Markdown, { path: '../markdown/introduce.md', key: '1' }) },
        { path: "install", component: h(Markdown, { path: '../markdown/install.md', key: '2' }) },
        { path: "start", component: h(Markdown, { path: '../markdown/start.md', key: '3' }) },
        { path: 'switch', component: SwitchPage },
        { path: 'button', component: ButtonPage },
        { path: 'input', component: InputPage },
        { path: 'dialog', component: DialogPage },
        { path: 'grid', component: GridPage },
        { path: 'toast', component: ToastPage },
        { path: 'collapse', component: CollapsePage },
        { path: 'tabs', component: TabsPage },
        { path: 'poptip', component: PoptipPage }
      ]
    }
  ]
})
export { router }