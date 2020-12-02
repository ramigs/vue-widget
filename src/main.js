import Vue from 'vue'
import WidgetApp from './WidgetApp.vue'
/* import router from './router'
import store from './store/index' */
import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)

/* App.store = store
App.router = router */
Vue.customElement('vue-widget', WidgetApp)