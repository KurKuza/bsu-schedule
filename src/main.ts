import { createApp } from 'vue';
import App from './app/App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia';

createApp(App).use(Antd).use(createPinia()).mount('#app');
