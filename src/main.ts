import { createApp } from 'vue';
import App from './app/App.vue';

import { pinia } from './shared/pinia';
import { vuetify } from './shared/vuetify';

createApp(App).use(vuetify).use(pinia).mount('#app');
