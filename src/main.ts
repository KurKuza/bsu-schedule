import { createApp } from 'vue';
import App from './app/App.vue';

import { pinia } from './shared/lib/pinia';
import { vuetify } from './shared/lib/vuetify';

createApp(App).use(vuetify).use(pinia).mount('#app');
