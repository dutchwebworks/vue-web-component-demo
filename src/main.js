import Vue from 'vue';
import App from './App.vue';
import wrap from '@vue/web-component-wrapper';
import NameBlock from './components/NameBlock.vue';

const CustomElement = wrap(Vue, NameBlock);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
