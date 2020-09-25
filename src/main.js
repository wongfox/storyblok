import Vue from 'vue'
import App from './App.vue'
import StoryblokVue from 'storyblok-vue'

Vue.use(StoryblokVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
