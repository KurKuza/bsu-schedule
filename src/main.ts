import { createApp } from 'vue';
import App from './app/App.vue';

import { pinia } from './shared/pinia';
import { vuetify } from './shared/vuetify';
import { VDatePicker } from 'vuetify/labs/VDatePicker';

createApp(App).use(vuetify).component('VDatePicker', VDatePicker).use(pinia).mount('#app');
