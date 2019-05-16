import Vue from 'vue'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'
import VueUeditorWrap from 'vue-ueditor-wrap'

Vue.component('vue-ueditor-wrap', VueUeditorWrap)
Vue.use(Swipe).use(SwipeItem)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
